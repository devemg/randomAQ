import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup; 
  errorMessage: string | null = null;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',[ Validators.required,Validators.minLength(6)]]
    });
   }

  ngOnInit(): void {
  }

  /**
   * login with username and password
   */
  login() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value).then(res=>{
        this.router.navigate(['/admin']);
      })
      .catch(err=>{
        console.log(err)
        if(err.code == 'NotAuthorizedException' && err.message){
          this.errorMessage = err.message;
        }else if (err.code == 'UserNotFoundException' && err.message) {
          this.errorMessage = err.message;
        }else if (err.code == "UserNotConfirmedException" && err.message) {
          this.errorMessage = err.message;
        }
      })
    }
  }

  /**
   * Check control forms to return if should show error message in form
   * @param control 
   * @param error 
   * @returns 
   */
   isError(control: string, error: string){
    return this.loginForm.controls[control].touched 
    && this.loginForm.controls[control].hasError(error);
  }
}
