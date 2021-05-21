import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUpdateCategoryComponent } from './new-update-category.component';

describe('NewUpdateCategoryComponent', () => {
  let component: NewUpdateCategoryComponent;
  let fixture: ComponentFixture<NewUpdateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUpdateCategoryComponent ]
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
});
