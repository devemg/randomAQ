import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { NewUpdateCategoryComponent } from './components/categories/new-update-category/new-update-category.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialAngularModule } from '../material-angular.module';


@NgModule({
  declarations: [
    ListCategoriesComponent,
    NewUpdateCategoryComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialAngularModule
  ]
})
export class AdminModule { }
