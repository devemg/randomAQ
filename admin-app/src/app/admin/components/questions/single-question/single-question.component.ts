import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/admin/models/dialog-data';
import { Question } from 'src/app/admin/models/question';
import { ModalStatus } from 'src/app/admin/models/status-modal';

export interface DialogDataQuestion extends DialogData {
  question: Question
}

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit {

  status: ModalStatus = ModalStatus.CREATING; 

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataQuestion) { }

  ngOnInit(): void {
    //setting status modal
    if(this.data != null){
      this.status = this.data.status;
    }else {
      this.status = ModalStatus.CREATING;
    }
  }

}
