import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
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
      providers: [
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

  it('should call getAllQuestions() of categoryService on ngOnInit', () => {
    let allQuestions = spyOn(qService,'getAllQuestions').and.callFake(()=>new Promise(()=>{}));
    component.ngOnInit();
    expect(allQuestions).toHaveBeenCalled();
  }); 

  it('should call deleteQuestion() of categoryService on ngOnInit', () => {
    let allQuestions = spyOn(qService,'deleteQuestion').and.callFake(()=>new Promise(()=>{}));
    component.deleteQuestion('1');
    expect(allQuestions).toHaveBeenCalled();
  }); 
  
});
