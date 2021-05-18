import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  catList: Category[] = [];
  constructor(private apiService: ApiService) { 
  }

  ngOnInit() {
    this.catList = this.apiService.getAllCategories();
  }

}
