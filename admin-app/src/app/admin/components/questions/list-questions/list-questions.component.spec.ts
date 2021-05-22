import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { questionsMock } from 'src/app/admin/services/mock-data-services.spec';
import { QuestionService } from 'src/app/admin/services/question.service';

import { ListQuestionsComponent } from './list-questions.component';

fdescribe('ListQuestionsComponent', () => {
  let component: ListQuestionsComponent;
  let fixture: ComponentFixture<ListQuestionsComponent>;
  let qService: QuestionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuestionsComponent ],

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
    let allQuestions = spyOn(qService,'getAllQuestions').and.returnValue(of(questionsMock));
    component.ngOnInit();
    expect(allQuestions).toHaveBeenCalled();
  }); 

});
