import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/admin/models/category';
import { Image } from 'src/app/admin/models/image';
import { ModalStatus } from 'src/app/admin/models/status-modal';
import { CategoryService } from 'src/app/admin/services/category.service';

export interface DialogDataCategory {
  category:Category;
  status: ModalStatus;
}

@Component({
  selector: 'app-new-update-category',
  templateUrl: './new-update-category.component.html',
  styleUrls: ['./new-update-category.component.scss']
})
export class NewUpdateCategoryComponent implements OnInit {

  title = "New Category";
  images: Image[] = [];

  categoryForm: FormGroup;
  status:ModalStatus = ModalStatus.CREATING;
  

  constructor(private formBuilder: FormBuilder, private catService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataCategory) { 
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
    if(this.status == ModalStatus.READONLY){
      this.images = [
        { id: 1, name:this.data.category.name, url:this.data.category.image }
      ];
    }else {
      this.catService.getImages().subscribe(res=>{
        this.images = res;
      });
    }
    //updating form data
    if(this.status != ModalStatus.CREATING){
      this.categoryForm.patchValue({...this.data.category,image:1});
    }
    //updating title 
    switch(this.status){
      case ModalStatus.CREATING: this.title = 'New Category'; break; 
      case ModalStatus.UPDATING: this.title = 'Update Category'; break; 
      case ModalStatus.READONLY: this.title = 'Category'; break; 
    }
  }

  /**
   * save new category
   */
  save() {
   if(this.categoryForm.valid) {
     let imageUrl = this.images.find(i=>i.id == this.categoryForm.value.image);
    this.catService.newCategory({...this.categoryForm.value,image:imageUrl?imageUrl.url:''})
   }
  }

  /**
   * update category
   */
   update() {
    console.log(this.categoryForm.value);
    
   }
}
