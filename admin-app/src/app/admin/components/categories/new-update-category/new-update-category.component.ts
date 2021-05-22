import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Image } from 'src/app/admin/models/image';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { 
    this.images = this.apiService.getImages();
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
    this.apiService.newCategory({...this.categoryForm.value,image:imageUrl?imageUrl.url:''})
   }
    
  }

}
