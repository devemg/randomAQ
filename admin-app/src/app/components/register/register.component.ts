import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(4)]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z]).*$')]],
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
      this.authService.register(this.registerForm.value).then(res=>{
        console.log(res)
        //save JWT in local storage
        this.router.navigate(['/registered-to-verificate']);
      })
      .catch(err=>{
        console.log(err)
        if(err.code == 'UsernameExistsException') {
          this.registerFControls.username.setErrors({ usernameAlreadyExists: true })
        }
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
