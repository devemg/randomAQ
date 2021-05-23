import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/admin/models/category';
import { DialogData } from 'src/app/admin/models/dialog-data';
import { Question } from 'src/app/admin/models/question';
import { ModalStatus } from 'src/app/admin/models/status-modal';
import { CategoryService } from 'src/app/admin/services/category.service';
import { QuestionService } from 'src/app/admin/services/question.service';

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
  private matDialogRef: MatDialogRef<SingleQuestionComponent>) {
    this.qForm = this.formBuilder.group({
      id: [],
      content: ['',Validators.required],
      answer: ['',Validators.required],
      category: ['',Validators.required]
    });
   }

  ngOnInit(): void {
    //setting status modal
    if(this.data != null){
      this.status = this.data.status;
      this.qForm.patchValue({...this.data.question,category:this.data.question.category?.id});
    }else {
      this.status = ModalStatus.CREATING;
    }

    //fill categories
    if(this.status != 3){
      this.catService.getAllCategories().subscribe(res=>{
        this.categoriesList = res; 
      })
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
      this.qService.saveQuestion(this.qForm.value)
      .subscribe(res=>this.matDialogRef.close(true),err=>{
        this.matDialogRef.close(false)
      })
    }
  }

  /**
   * update a question
   */
  update() {
    if(this.qForm.valid){
      this.qService.updateQuestion(this.qForm.value)
      .subscribe(res=>this.matDialogRef.close(true),err=>{
        this.matDialogRef.close(false)
      })
    }
  }

}
