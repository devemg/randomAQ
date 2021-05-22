import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { NewUpdateCategoryComponent } from './new-update-category.component';

describe('NewUpdateCategoryComponent', () => {
  let component: NewUpdateCategoryComponent;
  let fixture: ComponentFixture<NewUpdateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUpdateCategoryComponent ],
      providers: [ FormBuilder ],
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

});
