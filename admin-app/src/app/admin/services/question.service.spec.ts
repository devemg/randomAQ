import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
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

   const req = httpMock.expectOne(`${environment.API_QUESTIONS}`)
    expect(req.request.method).toBe('GET');
    req.flush(questionsMock);

  });

  it('should call getQuestions and return a question', () => {
    service.getQuestion('1').then(response => {
      expect(response).toEqual(questionsMock[0]);
    });

   const req = httpMock.expectOne(`${environment.API_QUESTIONS}/1`)
    expect(req.request.method).toBe('GET');
    req.flush(questionsMock[0]);

  });

  it('should save question', () => {
    service.saveQuestion(questionsMock[0]).then(response => {
      expect(response).toBeTruthy();
    });

   const req = httpMock.expectOne(`${environment.API_QUESTIONS}`)
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should update question', () => {
    service.updateQuestion('1',questionsMock[0]).then(response => {
      expect(response).toBeTruthy();
    });

   const req = httpMock.expectOne(`${environment.API_QUESTIONS}`)
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });

  it('should delete question', () => {
    service.deleteQuestion('1').then(response => {
      expect(response).toBeTruthy();
    });

   const req = httpMock.expectOne(`${environment.API_QUESTIONS}/1`)
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

});
