import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Question } from 'src/app/admin/models/question';
import { QuestionService } from 'src/app/admin/services/question.service';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss']
})
export class ListQuestionsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['content','category', 'options'];
  datasource: MatTableDataSource<Question> = new MatTableDataSource();

  constructor(public qService: QuestionService) { }

  ngOnInit(): void {
    this.qService.getAllQuestions().subscribe(res=>{
      this.datasource = new MatTableDataSource(res);
    })
  }

  /**
   * save new question
   */
  newQuestion() {

  }

  /**
   * show detail of question
   * @param question 
   */
  seeQuestion(question: Question){

  }

  /**
   * show to update question
   * @param question 
   */
  updateQuestion(question: Question){

  }

}
