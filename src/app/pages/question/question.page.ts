import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Question } from 'src/app/models/question';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  category: Category = {
    image:'',
    name:''
  };

  question: Question = {
    answer:'',
    content:''
  };

  constructor(private localService: LocalStorageService, private apiService: ApiService) { }

  ngOnInit() {
    this.category = this.localService.getCategory();
    this.question = this.apiService.getQuestion();
  }

}
