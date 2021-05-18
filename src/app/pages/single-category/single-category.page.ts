import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.page.html',
  styleUrls: ['./single-category.page.scss'],
})
export class SingleCategoryPage implements OnInit {

  category: Category = {
    image:'',
    name:'',
    description:'',
    id:0
  };

  constructor(private activatedRouter: ActivatedRoute, private apiService: ApiService) { 
    const id = this.activatedRouter.snapshot.params.id;
    if(id){
      this.category = this.apiService.getCategory(id);
    }
  }

  ngOnInit() {
  }

}
