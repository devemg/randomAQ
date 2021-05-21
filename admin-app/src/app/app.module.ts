import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListQuestionsComponent } from './components/questions/list-questions/list-questions.component';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { NewUpdateCategoryComponent } from './components/categories/new-update-category/new-update-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListQuestionsComponent,
    ListCategoriesComponent,
    NewUpdateCategoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
