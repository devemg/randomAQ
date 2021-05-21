import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/admin/models/category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['name', 'image' ,'description', 'options'];
  datasource: MatTableDataSource<Category>;

  constructor(private apiService:ApiService) {
     let cats: Category[] = [];
     cats = cats.concat(this.apiService.getAllCategories());
     cats = cats.concat(this.apiService.getAllCategories());
    this.datasource = new MatTableDataSource(cats);
  }

  ngOnInit(): void {
  }

   ngAfterViewInit() {
    if(this.paginator){
      this.datasource.paginator = this.paginator;
    }
  }

}
