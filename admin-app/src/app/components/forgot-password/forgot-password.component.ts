import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  recoverForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.recoverForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  /**
   * Recover Password
   */
  submit() {

  }

}
