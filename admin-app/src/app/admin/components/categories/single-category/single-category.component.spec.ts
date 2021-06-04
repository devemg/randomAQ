import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { ModalStatus } from 'src/app/admin/models/status-modal';
import { CategoryService } from 'src/app/admin/services/category.service';
import { categoriesMock } from 'src/app/admin/services/mock-data-services.spec';

import { SingleCategoryComponent } from './single-category.component';

describe('SingleCategoryComponent', () => {
  let component: SingleCategoryComponent;
  let fixture: ComponentFixture<SingleCategoryComponent>;
  let service: CategoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCategoryComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ FormBuilder, 
        { provide: MAT_DIALOG_DATA, useValue: null },
        { provide: MatDialogRef, useValue: {close: ()=>{}} } ],
      schemas:[ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryComponent);
    component = fixture.componentInstance;
    service = component.catService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if the form is invalid at start', () => {
      expect(component.categoryForm.invalid).toBeTrue();
  });

  it('should check status is creating', () => {
    expect(component.title).toBe("New Category");
    expect(component.status).toBe(ModalStatus.CREATING);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[formControlName=name]').readOnly).toBeFalse();
});

  it('should check if the form is invalid with fake data without image', () => {
    component.categoryForm.patchValue({
      name:'Category A',
      description:"Description A"
    });
    fixture.detectChanges();
    expect(component.categoryForm.invalid).toBeTrue();
  });

  it('should check if the form is invalid with fake data without name', () => {
    component.categoryForm.patchValue({
      image:1,
      description:"Description A"
    });
    fixture.detectChanges();
    expect(component.categoryForm.invalid).toBeTrue();
  });

  it('should check if the form is valid with fake data', () => {
    component.categoryForm.patchValue({
      name:'Category A',
      description:"Description A",
      image:1
    });
    fixture.detectChanges();
    expect(component.categoryForm.valid).toBeTrue();
  });

  it('should check modal status as readonly', () => {
    component.data = {status:ModalStatus.READONLY,category:categoriesMock[0]};
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.categoryForm.valid).toBeTrue();
    expect(component.title).toBe("Category");
    expect(component.status).toBe(ModalStatus.READONLY);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[formControlName=name]').readOnly).toBeTrue();
  });

  it('should check modal status as updating', () => {
    component.data = {status:ModalStatus.UPDATING,category:categoriesMock[0]};
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.categoryForm.valid).toBeTrue();
    expect(component.title).toBe("Update Category");
    expect(component.status).toBe(ModalStatus.UPDATING);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[formControlName=name]').readOnly).toBeFalse();
  });

  it('should call newCategory service ', () => {
    let newQ = spyOn(service,'newCategory').and.callFake(_=>new Promise(()=>{}));
    component.categoryForm.patchValue(categoriesMock[0]);
    component.save();
    expect(newQ).toHaveBeenCalled();
  });

  it('should call updateCategory service ', () => {
    let newQ = spyOn(service,'updateCategory').and.callFake(_=>new Promise(()=>{}));
    component.categoryForm.patchValue(categoriesMock[0]);
    component.update();
    expect(newQ).toHaveBeenCalled();
  });

  it('should not call newCategory service ', () => {
    let newQ = spyOn(service,'newCategory').and.callFake(_=>new Promise(()=>{}));
    component.save();
    expect(newQ).not.toHaveBeenCalled();
  });

  it('should not call updateCategory service ', () => {
    let newQ = spyOn(service,'updateCategory').and.callFake(_=>new Promise(()=>{}));
    component.update();
    expect(newQ).not.toHaveBeenCalled();
  });

});
