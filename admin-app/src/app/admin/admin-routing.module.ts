import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { HomeComponent } from './components/home/home.component';
import { ListQuestionsComponent } from './components/questions/list-questions/list-questions.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
   // canActivate: [ AuthGuard ],
    children: [
      {
        path:'',
        component:ListQuestionsComponent
      },
      {
        path:'categories',
        component:ListCategoriesComponent
      },
      {
        path:'questions',
        component:ListQuestionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
