import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Category } from 'src/app/admin/models/category';
import { DialogData } from 'src/app/admin/models/dialog-data';
import { Question } from 'src/app/admin/models/question';
import { ModalStatus } from 'src/app/admin/models/status-modal';
import { CategoryService } from 'src/app/admin/services/category.service';
import { QuestionService } from 'src/app/admin/services/question.service';
import { ExceptionCode, TipicalExceptions } from 'src/app/const';

export interface DialogDataQuestion extends DialogData {
  question: Question
}

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit {
  title = "New Question";
  status: ModalStatus = ModalStatus.CREATING; 

  categoriesList: Category[] = [];
  qForm: FormGroup; 


  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataQuestion, private formBuilder: FormBuilder,
  public qService: QuestionService, public catService: CategoryService,
  private matDialogRef: MatDialogRef<SingleQuestionComponent>,
  private matSnackBar: MatSnackBar,
  private router: Router,
  private spinner: NgxSpinnerService) {
    this.qForm = this.formBuilder.group({
      id: [],
      content: ['',Validators.required],
      answer: ['',Validators.required],
      questionCategoryId: ['',Validators.required]
    });
   }

  ngOnInit(): void {
    //setting status modal
    if(this.data != null){
      this.status = this.data.status;
      this.qForm.patchValue({...this.data.question,questionCategoryId:this.data.question.questionCategoryId});
    }else {
      this.status = ModalStatus.CREATING;
    }

    //fill categories
    if(this.status != 3){
      this.catService.getAllCategories().then(res=>{
        this.categoriesList = res; 
      })
      .catch(err=>console.log(err));
    }else {
      this.categoriesList = this.data.question.category?[this.data.question.category]:[];  
    }
    this.updateTitle();
  }

  /**
   * Update title by status
   */
  updateTitle() {
    switch(this.status){
      case ModalStatus.CREATING: this.title = 'New Question'; break; 
      case ModalStatus.UPDATING: this.title = 'Update Question'; break; 
      case ModalStatus.READONLY: this.title = 'Question'; break; 
    }
  }

  /**
   * Save new Question
   */
  save() {
    if(this.qForm.valid){
      this.spinner.show();
      this.qService.saveQuestion(this.qForm.value)
      .then(res=>{
        this.matDialogRef.close(true);
      })
      .catch(err=>{
        if(TipicalExceptions.includes(err.status)) {
          this.matSnackBar.open(err.error,'Ok',{duration:3000});
        }else if(err.status == ExceptionCode.TokenExpiredException) {
          this.router.navigate(['/login']);
        }else {
          this.matSnackBar.open("Cannot save question",'Ok',{duration:2000});
        }
        this.matDialogRef.close(false);
      }).finally(()=>{
        this.spinner.hide();
      });
    }
  }

  /**
   * update a question
   */
  update() {
    if(this.qForm.valid){
      this.spinner.show();
      this.qService.updateQuestion(this.qForm.value.id,this.qForm.value)
      .then(res=>this.matDialogRef.close(true))
      .catch(err=>{
        if(TipicalExceptions.includes(err.status)) {
          this.matSnackBar.open(err.error,'Ok',{duration:3000});
        }else if(err.status == ExceptionCode.TokenExpiredException) {
          this.router.navigate(['/login']);
        }else {
          this.matSnackBar.open("Cannot update question",'Ok',{duration:2000});
        }
        this.matDialogRef.close(false);
      })
      .finally(()=>{
        this.spinner.hide();
      });
    }
  }

}
