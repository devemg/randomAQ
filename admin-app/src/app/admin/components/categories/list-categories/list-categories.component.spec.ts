import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListCategoriesComponent } from './list-categories.component';
import { ShortDescriptionPipe } from 'src/app/admin/pipes/short-description.pipe';
import { CategoryService } from 'src/app/admin/services/category.service';
import { categoriesMock } from 'src/app/admin/services/mock-data-services.spec';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListCategoriesComponent', () => {
  let component: ListCategoriesComponent;
  let fixture: ComponentFixture<ListCategoriesComponent>;
  let catService: CategoryService;
  
  beforeAll(() => {
  });


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoriesComponent, ShortDescriptionPipe ],
      imports: [MatDialogModule, NoopAnimationsModule ],
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

  it('should call getAllCategories() of categoryService on ngOnInit', () => {
    let allCategories = spyOn(catService,'getAllCategories').and.returnValue(of(categoriesMock));
    component.ngOnInit();
    component.ngAfterViewInit();
    fixture.detectChanges();
    expect(allCategories).toHaveBeenCalled();
    expect(component.datasource).toBeTruthy();
  });

  it('should open matDialog to create new Category', () => {
    let open = spyOn(component.matDialog,'open');
    component.newCategory();
    component.ngOnInit();
    expect(open).toHaveBeenCalled();
  }); 

  it('should open matDialog to create QuCategoryestion', () => {
    let open = spyOn(component.matDialog,'open');
    component.seeCategory(categoriesMock[0]);
    component.ngOnInit();
    expect(open).toHaveBeenCalled();
  }); 

  it('should open matDialog to update Category', () => {
    let open = spyOn(component.matDialog,'open');
    component.updateCategory(categoriesMock[0]);
    component.ngOnInit();
    expect(open).toHaveBeenCalled();
  }); 

});
