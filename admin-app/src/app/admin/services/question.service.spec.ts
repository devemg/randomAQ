import { TestBed } from '@angular/core/testing';
import { Question } from '../models/question';

import { QuestionService } from './question.service';

describe('QuestionService', () => {
  let service: QuestionService;

  let questionsMock: Question[] = [
    {id:1,content:'¿Cuál es mi princesa favorita?',answer:'Mulan'}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
