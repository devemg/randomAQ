import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalStatus } from 'src/app/admin/models/status-modal';
import { categoriesMock } from 'src/app/admin/services/mock-data-services.spec';

import { NewUpdateCategoryComponent } from './new-update-category.component';

describe('NewUpdateCategoryComponent', () => {
  let component: NewUpdateCategoryComponent;
  let fixture: ComponentFixture<NewUpdateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUpdateCategoryComponent ],
      providers: [ FormBuilder, 
        { provide: MAT_DIALOG_DATA, useValue: null } ],
      schemas:[ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUpdateCategoryComponent);
    component = fixture.componentInstance;
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

});
