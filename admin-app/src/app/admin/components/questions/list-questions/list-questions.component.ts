import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Question } from 'src/app/admin/models/question';
import { ModalStatus } from 'src/app/admin/models/status-modal';
import { QuestionService } from 'src/app/admin/services/question.service';
import { ExceptionCode } from 'src/app/const';
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

  loading = false;
  constructor(public qService: QuestionService, public matDialog:MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
      this.loadDatasource();
  }

  loadDatasource() {
    this.loading = true;
    this.qService.getAllQuestions().then(res=>{
      this.datasource = new MatTableDataSource(res);
      if(this.paginator){
        this.datasource.paginator = this.paginator;
      }
      this.loading = false;
    }).catch(err=>console.log(err));
  }

  /**
   * save new question
   */
  newQuestion() {
    this.matDialog.open(SingleQuestionComponent,{
      width:'60%'
    })
    .afterClosed().subscribe(res=>{
      if(res){
        this.snackBar.open("Question created!",'Ok',{duration:2000})
        this.loadDatasource();
      }
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
    })
    .afterClosed().subscribe(res=>{
      if(res){
        this.snackBar.open("Question updated!",'Ok',{duration:2000})
        this.loadDatasource();
      }
    });
  }

  /**
   * Delete question
   * @param id 
   */
  deleteQuestion(id: string) {
    this.qService.deleteQuestion(id)
    .then(res=>{
      if(res){
        this.snackBar.open("Question deleted!",'Ok',{duration:2000})
        this.loadDatasource();
      }
    })
    .catch(err=>{
      if(err.status == ExceptionCode.ForbbidenException){
        this.snackBar.open(err.error,'Ok',{duration:3000});
      } else {
        this.snackBar.open("Cannot delete question",'Ok',{duration:2000})
      }
    })
  }
}
