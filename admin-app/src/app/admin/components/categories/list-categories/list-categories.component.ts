import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/admin/models/category';
import { CategoryService } from 'src/app/admin/services/category.service';
import { NewUpdateCategoryComponent } from '../new-update-category/new-update-category.component';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['name', 'image' ,'description', 'options'];
  datasource: MatTableDataSource<Category> = new MatTableDataSource();

  constructor(private catService: CategoryService, private matDialog: MatDialog) {
    this.catService.getAllCategories().subscribe(res=>{
      this.datasource = new MatTableDataSource(res);
    })
  }

  ngOnInit(): void {
  }

   ngAfterViewInit() {
    if(this.paginator){
      this.datasource.paginator = this.paginator;
    }
  }

  newCategory() {
    this.matDialog.open(NewUpdateCategoryComponent,{
      width:'60%'
    })
  }

}
