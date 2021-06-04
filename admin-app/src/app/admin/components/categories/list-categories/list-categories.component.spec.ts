import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListCategoriesComponent } from './list-categories.component';
import { ShortDescriptionPipe } from 'src/app/admin/pipes/short-description.pipe';
import { CategoryService } from 'src/app/admin/services/category.service';
import { categoriesMock } from 'src/app/admin/services/mock-data-services.spec';
import { ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListCategoriesComponent', () => {
  let component: ListCategoriesComponent;
  let fixture: ComponentFixture<ListCategoriesComponent>;
  let catService: CategoryService;
  
  beforeAll(() => {
  });


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoriesComponent, ShortDescriptionPipe ],
      imports: [NoopAnimationsModule, HttpClientTestingModule, RouterTestingModule ],
      providers: [ MatPaginator, ChangeDetectorRef, 
        { provide: MatDialog, useValue: { open: ()=>{}} },
        { provide: MatSnackBar, useValue: {open: ()=>{}} } ],
      schemas:[ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoriesComponent);
    component = fixture.componentInstance;
    catService = component.catService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject categoryService', () => {
    expect(catService).toBeTruthy();
  });

  it('should call getAllCategories() of CategoryService on loadDatasource', () => {
    let allFunction = spyOn(catService,'getAllCategories').and.callFake(()=>new Promise((resolve,reject)=>{
      resolve(categoriesMock);
    }));
    component.paginator = TestBed.inject(MatPaginator);
    component.loadDatasource();
    fixture.detectChanges();
    expect(allFunction).toHaveBeenCalled();
    expect(component.paginator).toBeDefined();
  }); 

  it('should call getAllCategories() of CategoryService on loadDatasource with error', () => {
    let allCategories = spyOn(catService,'getAllCategories').and.callFake(()=>new Promise((resolve,reject)=>{
      reject({});
    }));
    component.loadDatasource();
    expect(allCategories).toHaveBeenCalled();
  });

  it('should call deleteCategory() of categoryService', () => {
    let allQuestions = spyOn(catService,'deleteCategory').and.callFake(()=>new Promise((resolve,reject)=>{
      resolve({});
    }));
    component.deleteCategory('1');
    expect(allQuestions).toHaveBeenCalled();
  }); 
  
  it('should call deleteCategory() of categoryService', () => {
    let allQuestions = spyOn(catService,'deleteCategory').and.callFake(()=>new Promise((resolve,reject)=>{
      reject({});
    }));
    component.deleteCategory('1');
    expect(allQuestions).toHaveBeenCalled();
  }); 

});
