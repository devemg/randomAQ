import { TestBed } from '@angular/core/testing';
import { questionsMock } from './mock-data-services.spec';

import { QuestionService } from './question.service';

describe('QuestionService', () => {
  let service: QuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllQuestions and return a list of questions', () => {
    service.getAllQuestions().subscribe(response => {
      expect(response.length).toBe(5);
      expect(response).toEqual(questionsMock);
    });
  });

  it('should call getQuestion with id = 1 and return a question', () => {
    service.getQuestion(1).subscribe(response => {
      expect(response).toEqual(questionsMock[0]);
    });
  });

  it('should call getQuestionsByCategory with id = 1 and return a list of questions', () => {
    service.getQuestionByCategory(1).subscribe(response => {
      expect(response).toEqual(questionsMock.filter(m=>m.category_id == 1));
    });
  });

  it('should call saveQuestion and return a response', () => {
    service.saveQuestion(questionsMock[0]).subscribe(response => {
      expect(response).toBeTrue();
    });
  });


  it('should call updateQuestion and return a response', () => {
    service.updateQuestion(questionsMock[0]).subscribe(response => {
      expect(response).toBeTrue();
    });
  });


  it('should call deleteQuestion and return a response', () => {
    service.deleteQuestion(1).subscribe(response => {
      expect(response).toBeTrue();
    });
  });


});
