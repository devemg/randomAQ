import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/admin/models/category';
import { DialogData } from 'src/app/admin/models/dialog-data';
import { Image } from 'src/app/admin/models/image';
import { ModalStatus } from 'src/app/admin/models/status-modal';
import { CategoryService } from 'src/app/admin/services/category.service';
import { ExceptionCode } from 'src/app/const';

export interface DialogDataCategory extends DialogData {
  category:Category;
}

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {

  title = "New Category";
  images: Image[] = [];

  categoryForm: FormGroup;
  status:ModalStatus = ModalStatus.CREATING;
  image = '';

  constructor(private formBuilder: FormBuilder, public catService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataCategory, 
    private matDialgoRef: MatDialogRef<SingleCategoryComponent>,
    private matSnackBar: MatSnackBar) { 
    this.categoryForm = this.formBuilder.group({
      id:[],
      name:['',Validators.required],
      description:['',Validators.required],
      image:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.status = this.data != null?this.data.status:ModalStatus.CREATING;
    // updating list of images
    if(this.status != ModalStatus.READONLY){
      this.catService.getImages().then(res=>{
        this.images = res;
      })
      .catch(err=>console.log(err));
    }
    //updating form data
    if(this.status != ModalStatus.CREATING){
      this.categoryForm.patchValue({...this.data.category});
      this.image = this.data.category.image;
    }
    //updating title     
    this.updateTitle();
  }

  /**
   * Update title
   */
  updateTitle() {
    switch(this.status){
      case ModalStatus.CREATING: this.title = 'New Category'; break; 
      case ModalStatus.UPDATING: this.title = 'Update Category'; break; 
      case ModalStatus.READONLY: this.title = 'Category'; break; 
    }
  }

  /**
   * change preview image 
   */
  changeSelectedImage(event: string){
    let image = this.images.find(m=>m.id == event);
    this.image = image?image.url:'';
  }


  /**
   * save new category
   */
  save() {
   if(this.categoryForm.valid) {
      let imageUrl = this.images.find(i=>i.id == this.categoryForm.value.image);
      this.catService.newCategory({...this.categoryForm.value,image:imageUrl?imageUrl.url:''})
      .then(res=>this.matDialgoRef.close(true))
      .catch(err=>{
        if(err.status == ExceptionCode.ForbbidenException) {
          this.matSnackBar.open(err.error,'Ok',{duration:3000});
        }else {
          this.matSnackBar.open("Cannot update question",'Ok',{duration:2000});
        }
      })
      .finally(()=>{
        this.matDialgoRef.close(false);
      });
    }
  }

  /**
   * update category
   */
   update() {
    if(this.categoryForm.valid) {
        let imageUrl = this.images.find(i=>i.id == this.categoryForm.value.image);
        let newElement = {...this.categoryForm.value,image:imageUrl?imageUrl.url:this.image};
        this.catService.updateCategory(this.categoryForm.value.id,newElement)
        .then(res=>this.matDialgoRef.close(true))
        .catch(err=>{
          if(err.status == ExceptionCode.ForbbidenException) {
            this.matSnackBar.open(err.error,'Ok',{duration:3000});
          }else {
            this.matSnackBar.open("Cannot update question",'Ok',{duration:2000});
          }
        })
        .finally(()=>{
          this.matDialgoRef.close(false);
        });
    }
   }
}
