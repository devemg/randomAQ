import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Question } from 'src/app/admin/models/question';
import { ModalStatus } from 'src/app/admin/models/status-modal';
import { QuestionService } from 'src/app/admin/services/question.service';
import { SingleQuestionComponent } from '../single-question/single-question.component';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss']
})
export class ListQuestionsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['content','category', 'options'];
  datasource: MatTableDataSource<Question> = new MatTableDataSource();

  constructor(public qService: QuestionService, public matDialog:MatDialog) { }

  ngOnInit(): void {
    this.qService.getAllQuestions().subscribe(res=>{
      this.datasource = new MatTableDataSource(res);
    })
  }

  /**
   * save new question
   */
  newQuestion() {
    this.matDialog.open(SingleQuestionComponent,{
      width:'60%'
    });
    
  }

  /**
   * show detail of question
   * @param question 
   */
  seeQuestion(question: Question){
    this.matDialog.open(SingleQuestionComponent,{
      width:'60%',
      data: { status:ModalStatus.READONLY, question }
    });
  }

  /**
   * show to update question
   * @param question 
   */
  updateQuestion(question: Question){
    this.matDialog.open(SingleQuestionComponent,{
      width:'60%',
      data: { status:ModalStatus.UPDATING, question }
    });
  }

}
