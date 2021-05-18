import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Question } from 'src/app/models/question';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ClockComponent } from './clock/clock.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit, AfterViewInit {
  @ViewChild(ClockComponent) clock: ClockComponent;

  category: Category = {
    image:'',
    name:''
  };

  question: Question = {
    answer:'',
    content:''
  };

  running = true; 
  constructor(private localService: LocalStorageService, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.category = this.localService.getCategory();
    this.question = this.apiService.getQuestion();
  }

  ngAfterViewInit() {
    this.running = true;
    this.clock.start();
  }

  /**
   * exec if the answer is wrong
   */
  badAnswer() {
    this.clock.stop();
    this.running = false;
  }

  /**
   * exec if the answer is fine
   */
  coolAnswer() {
    this.clock.stop();
    this.running = false;
  }

  /**
   * Go back to categories
   */
  back() {
    this.router.navigate(['/categories']);
  }

}
