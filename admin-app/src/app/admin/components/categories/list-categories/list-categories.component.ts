import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/admin/models/category';
import { ModalStatus } from 'src/app/admin/models/status-modal';
import { CategoryService } from 'src/app/admin/services/category.service';
import { SingleCategoryComponent } from '../single-category/single-category.component';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['name', 'image' ,'description', 'options'];
  datasource: MatTableDataSource<Category> = new MatTableDataSource();

  constructor(public catService: CategoryService, public matDialog: MatDialog) {
    
  }

  ngOnInit(): void {
    this.catService.getAllCategories().subscribe(res=>{
      this.datasource = new MatTableDataSource(res);
    })
  }

   ngAfterViewInit() {
    if(this.paginator){
      this.datasource.paginator = this.paginator;
    }
  }

  newCategory() {
    this.matDialog.open(SingleCategoryComponent,{
      width:'60%'
    })
  }

  updateCategory(category: Category) {
    this.matDialog.open(SingleCategoryComponent,{
      width:'60%',
      data:{ status:ModalStatus.UPDATING, category:category }
    })
  }

  seeCategory(category: Category) {
    this.matDialog.open(SingleCategoryComponent,{
      width:'60%',
      data:{ status:ModalStatus.READONLY, category:category }
    })
  }

}
