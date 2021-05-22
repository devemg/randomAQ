import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalStatus } from 'src/app/admin/models/status-modal';
import { questionsMock } from 'src/app/admin/services/mock-data-services.spec';

import { SingleQuestionComponent } from './single-question.component';

fdescribe('SingleQuestionComponent', () => {
  let component: SingleQuestionComponent;
  let fixture: ComponentFixture<SingleQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleQuestionComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: null }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be in creating status', () => {
    expect(component.status).toBe(ModalStatus.CREATING);
    expect(component.title).toBe("New Question");
    expect(component.qForm.valid).toBeFalse();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
  });

  it('should be in updating mode', () => {
    component.data = { status:ModalStatus.UPDATING, question:questionsMock[0] };
    expect(component.status).toBe(ModalStatus.UPDATING);
    expect(component.title).toBe("Update Question");
    expect(component.qForm.valid).toBeTrue();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
  });

  it('should be in readonly mode', () => {
    component.data = { status:ModalStatus.READONLY, question:questionsMock[0] };
    expect(component.status).toBe(ModalStatus.READONLY);
    expect(component.title).toBe("Question");
    expect(component.qForm.valid).toBeTrue();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button[type="submit"]')).toBeFalsy();
  });

  it('should form be invalid', () => {
    expect(component.qForm.invalid).toBeTrue();
  });

  it('should form be invalid with some data', () => {
    component.qForm.patchValue({
      content:'what if...?',
      category:1
    });
    expect(component.qForm.valid).toBeFalse();
  });

  it('should form be invalid with some data', () => {
    component.qForm.patchValue({
      content:'what if...?',
      category:1,
      answer:'So...'
    });
    expect(component.qForm.valid).toBeTrue();
  });

});
