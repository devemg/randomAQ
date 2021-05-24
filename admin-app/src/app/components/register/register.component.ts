import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value);
    
  }

}
