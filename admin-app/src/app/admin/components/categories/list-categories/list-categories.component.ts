import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Category } from 'src/app/admin/models/category';
import { ModalStatus } from 'src/app/admin/models/status-modal';
import { CategoryService } from 'src/app/admin/services/category.service';
import { ExceptionCode, TipicalExceptions } from 'src/app/const';
import { SingleCategoryComponent } from '../single-category/single-category.component';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['name', 'image' ,'description', 'options'];
  datasource: MatTableDataSource<Category> = new MatTableDataSource();

  loading = false;
  constructor(public catService: CategoryService, public matDialog: MatDialog, public snackBar: MatSnackBar,
    private router: Router) {
    
  }

  ngOnInit(): void {
      this.loadDatasource();
  }

  loadDatasource() {
    this.loading = true;
    this.catService.getAllCategories().then(res=>{
      this.datasource = new MatTableDataSource(res);
      if(this.paginator){
        this.datasource.paginator = this.paginator;
      }
      this.loading = false;
    })
    .catch(err=>{
      console.log(err.status)
      if(err.status == ExceptionCode.TokenExpiredException) {
        this.router.navigate(['/login']);
      }
    });
  }

  newCategory() {
    this.matDialog.open(SingleCategoryComponent,{
      width:'60%'
    })
    .afterClosed().subscribe(res=>{
      if(res){
        this.snackBar.open("Category created!",'Ok',{duration:2000});
        this.loadDatasource();
      }
    })
  }

  updateCategory(category: Category) {
    this.matDialog.open(SingleCategoryComponent,{
      width:'60%',
      data:{ status:ModalStatus.UPDATING, category:category }
    }).afterClosed().subscribe(res=>{
      if(res){
        this.snackBar.open("Category updated!",'Ok',{duration:2000});
        this.loadDatasource();
      }
    })
  }

  seeCategory(category: Category) {
    this.matDialog.open(SingleCategoryComponent,{
      width:'60%',
      data:{ status:ModalStatus.READONLY, category:category }
    })
  }

  deleteCategory(id: string) {
    this.loading = true;
    this.catService.deleteCategory(id).then(res=>{
        this.snackBar.open("Category deleted!",'Ok',{duration:2000});
        this.loadDatasource();
    }).catch(err=>{
      if(TipicalExceptions.includes(err.status)){
        this.snackBar.open(err.error,'Ok',{duration:3000});
      } else if(err.status == ExceptionCode.TokenExpiredException) {
        this.router.navigate(['/login']);
      } else {
        this.snackBar.open("Cannot delete category",'Ok',{duration:2000})
      }
    })
  }

}
