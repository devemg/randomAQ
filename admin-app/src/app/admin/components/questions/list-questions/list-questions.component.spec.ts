import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { questionsMock } from 'src/app/admin/services/mock-data-services.spec';
import { QuestionService } from 'src/app/admin/services/question.service';

import { ListQuestionsComponent } from './list-questions.component';

describe('ListQuestionsComponent', () => {
  let component: ListQuestionsComponent;
  let fixture: ComponentFixture<ListQuestionsComponent>;
  let qService: QuestionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuestionsComponent ],
      imports: [ MatDialogModule, HttpClientTestingModule ],
      providers: [ MatPaginator, ChangeDetectorRef,
        { provide: MatSnackBar, useValue: {open: ()=>{}} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuestionsComponent);
    component = fixture.componentInstance;
    qService = component.qService; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject questionService', () => {
    expect(qService).toBeTruthy();
  });

  it('should call getAllQuestions() of questionService on loadDatasource', () => {
    let allQuestions = spyOn(qService,'getAllQuestions').and.callFake(()=>new Promise((resolve,reject)=>{
      resolve(questionsMock);
    }));
    component.paginator = TestBed.inject(MatPaginator);
    component.loadDatasource();
    fixture.detectChanges();
    expect(allQuestions).toHaveBeenCalled();
    expect(component.paginator).toBeDefined();
  }); 

  it('should call getAllQuestions() of questionService on loadDatasource with error', () => {
    let allQuestions = spyOn(qService,'getAllQuestions').and.callFake(()=>new Promise((resolve,reject)=>{
      reject({});
    }));
    component.loadDatasource();
    expect(allQuestions).toHaveBeenCalled();
  });

  it('should call deleteQuestion() of questionService', () => {
    let allQuestions = spyOn(qService,'deleteQuestion').and.callFake(()=>new Promise((resolve,reject)=>{
      resolve({});
    }));
    component.deleteQuestion('1');
    expect(allQuestions).toHaveBeenCalled();
  }); 
  
  it('should call deleteQuestion() of questionService', () => {
    let allQuestions = spyOn(qService,'deleteQuestion').and.callFake(()=>new Promise((resolve,reject)=>{
      reject({});
    }));
    component.deleteQuestion('1');
    expect(allQuestions).toHaveBeenCalled();
  }); 
});
