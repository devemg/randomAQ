import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { questionsMock } from './mock-data-services.spec';

import { QuestionService } from './question.service';

describe('QuestionService', () => {
  let service: QuestionService;
  let httpMock: HttpTestingController; 
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(QuestionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllQuestions and return a list of questions', () => {
    service.getAllQuestions().then(response => {
      expect(response.length).toBe(5);
      expect(response).toEqual(questionsMock);
    });

   /*const req = httpMock.expectOne('http://localhost:3000/question')
    expect(req.request.method).toBe('GET');
    req.flush(questionsMock);*/

  });

});
