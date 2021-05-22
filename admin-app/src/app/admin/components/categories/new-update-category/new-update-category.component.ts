import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Image } from 'src/app/admin/models/image';
import { CategoryService } from 'src/app/admin/services/category.service';

@Component({
  selector: 'app-new-update-category',
  templateUrl: './new-update-category.component.html',
  styleUrls: ['./new-update-category.component.scss']
})
export class NewUpdateCategoryComponent implements OnInit {

  title = "New Category";
  images: Image[] = [];

  categoryForm: FormGroup;
  readonly = false; 

  constructor(private formBuilder: FormBuilder, private catService: CategoryService) { 
    this.catService.getImages().subscribe(res=>{
      this.images = res;
    });
    this.categoryForm = this.formBuilder.group({
      id:[],
      name:['',Validators.required],
      description:['',Validators.required],
      image:['',Validators.required]
    });
  }

  ngOnInit(): void {
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

}
