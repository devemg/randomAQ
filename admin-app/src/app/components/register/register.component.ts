import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import { PasswordValidator } from './password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  get registerFControls() { return this.registerForm.controls; }

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router,
    private spinner: NgxSpinnerService
    ) {
    this.registerForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(4)]],
      email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(6),/*Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z]).*$')*/]],
      confirmPassword: ['',Validators.required]
    },{validator: PasswordValidator('password','confirmPassword') });
   }

  ngOnInit(): void {
  }

  /**
   * Save new user
   */
  register() {
    if(this.registerForm.valid){
      this.spinner.show();
      this.authService.register(this.registerForm.value).then(res=>{
        this.router.navigate(['/admin']);
      })
      .catch(err=>{
        console.log(err)
        if(err.code) {
          this.registerFControls.username.setErrors({ usernameAlreadyExists: true })
        }
      }).finally(()=>{
        this.spinner.hide();
      });
    }
    
  }

  /**
   * Check control forms to return if should show error message in form
   * @param control 
   * @param error 
   * @returns 
   */
  isError(control: string, error: string){
    return this.registerFControls[control].touched 
    && this.registerFControls[control].hasError(error);
  }

}
