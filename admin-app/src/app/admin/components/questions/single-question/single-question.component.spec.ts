import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { ModalStatus } from 'src/app/admin/models/status-modal';
import { questionsMock } from 'src/app/admin/services/mock-data-services.spec';
import { QuestionService } from 'src/app/admin/services/question.service';

import { SingleQuestionComponent } from './single-question.component';

describe('SingleQuestionComponent', () => {
  let component: SingleQuestionComponent;
  let fixture: ComponentFixture<SingleQuestionComponent>;
  let service: QuestionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleQuestionComponent, RouterTestingModule ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: null },
        { provide: MatDialogRef, useValue: {close: ()=>{}} },
        FormBuilder
      ],
      schemas:[ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleQuestionComponent);
    component = fixture.componentInstance;
    service = component.qService; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be in creating status', () => {
    expect(component.status).toBe(ModalStatus.CREATING);
    expect(component.title).toBe("New Question");
    expect(component.qForm.valid).toBeFalse();
  });

  
  it('should form be invalid', () => {
    expect(component.qForm.invalid).toBeTrue();
  });
  
  it('should be in updating mode', () => {
    component.data = { status:ModalStatus.UPDATING, question:questionsMock[0] };
    component.ngOnInit();
    expect(component.status).toBe(ModalStatus.UPDATING);
    expect(component.title).toBe("Update Question");
  });

  
  it('should be in readonly mode', () => {
    component.data = { status:ModalStatus.READONLY, question:questionsMock[0] };
    component.ngOnInit();
    expect(component.status).toBe(ModalStatus.READONLY);
    expect(component.title).toBe("Question");
  });


  it('should call newQuestion service ', () => {
    let newQ = spyOn(service,'saveQuestion').and.callFake(_=>new Promise(()=>{})); 
    component.qForm.patchValue({
      content:'what if...?',
      questionCategoryId:1,
      answer:'So...'
    });
    component.save();
    expect(newQ).toHaveBeenCalled();
  });

  it('should call updateQuestion service ', () => {
    let newQ = spyOn(service,'updateQuestion').and.callFake(_=>new Promise(()=>{}));
    component.qForm.patchValue({
      content:'what if...?',
      questionCategoryId:1,
      answer:'So...'
    });
    component.update();
    expect(newQ).toHaveBeenCalled();
  });

});
