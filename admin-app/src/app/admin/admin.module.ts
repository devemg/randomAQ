import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { NewUpdateCategoryComponent } from './components/categories/new-update-category/new-update-category.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialAngularModule } from '../material-angular.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';


@NgModule({
  declarations: [
    ListCategoriesComponent,
    NewUpdateCategoryComponent,
    HomeComponent,
    ShortDescriptionPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialAngularModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class AdminModule { }
