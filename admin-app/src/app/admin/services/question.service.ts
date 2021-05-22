import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  question: Question[] = [
    {id:1,content:'¿Cuál es mi princesa favorita?',answer:'Mulan'}
  ];
  
  constructor() { }


}
