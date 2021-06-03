import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  isRecovering = false; 
  username: FormControl;
  password: FormControl;
  code: FormControl;
  constructor(private authService: AuthService,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar,
    private activatedRouter: ActivatedRoute,
    private router: Router ) { 
      this.username = new FormControl('',[Validators.required]);
      this.password = new FormControl();
      this.code = new FormControl();
  }

  ngOnInit(): void {
      if(this.activatedRouter.snapshot.params.username){
        this.isRecovering = true; 
        this.username.patchValue(this.activatedRouter.snapshot.params.username);
        this.password.setValidators([Validators.required,Validators.minLength(6)]);
        this.code.setValidators([Validators.required]);
      }
  }

  /**
   * Recover Password
   */
  submit() {
    if(this.isRecovering){
      this.newPassword();
    }else {
      this.resetPassword();
    }
  }

  /**
   * Send message to reset password
   */
  resetPassword() {
    if(this.username.valid){
      this.spinner.show();
      this.authService.resetPassword(this.username.value).then(res=>{
        this.snackBar.open("We send you a message to "+res.CodeDeliveryDetails.Destination,'Ok',
        { duration: 5000 }).afterDismissed().subscribe(()=>{
          this.router.navigate(['reset-password',this.username.value]);
        })
      })
      .catch(err=>console.log(err))
      .finally(()=>this.spinner.hide())
    }
  }

  /**
   * Reset the password
   */
  newPassword(){
    if( this.username.valid && this.password.valid && this.code.valid ){
      this.spinner.show();
      this.authService.newPassword(this.username.value,this.password.value,this.code.value).then(res=>{
        this.snackBar.open("Password changed",'Ok',
        { duration: 5000 }).afterDismissed().subscribe(()=>{
          this.router.navigate(['login']);
        })
      })
      .catch(err=>console.log(err))
      .finally(()=>this.spinner.hide())
    }
  }

}
