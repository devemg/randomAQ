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

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value);
    
    //this.authService.login("admin","password");
    //this.router.navigate(['/admin']);
  }

}
