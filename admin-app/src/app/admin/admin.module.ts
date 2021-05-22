import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { SingleCategoryComponent } from './components/categories/single-category/single-category.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialAngularModule } from '../material-angular.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ListQuestionsComponent } from './components/questions/list-questions/list-questions.component';
import { SingleQuestionComponent } from './components/questions/single-question/single-question.component';


@NgModule({
  declarations: [
    ListCategoriesComponent,
    SingleCategoryComponent,
    HomeComponent,
    ShortDescriptionPipe,
    ListQuestionsComponent,
    SingleQuestionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialAngularModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
