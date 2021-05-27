import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Category } from 'src/app/services/API.service-amplify';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  catList: Category[] = [];
  constructor(private apiService: ApiService, private router: Router) { 
  }

  ngOnInit() {
    this.apiService.getAllCategories().then(res=>{
      this.catList = res;
    });
  }

  goToCategory(id: number){
    this.router.navigate(['/categories',id]);
  }
}
