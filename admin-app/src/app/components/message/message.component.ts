import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TipicalExceptions } from 'src/app/const';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  title = 'Your account has been created!';
  message = 'Check your imbox and follow the instructions to activate your account.';

  isActivating = false; 
  code: FormControl;
  username: FormControl;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {
    this.code = new FormControl('',[Validators.required]);
    this.username = new FormControl('',[Validators.required]);
    
    this.isActivating = false;
    if(this.activatedRoute.snapshot.url[0].path == 'verificated'){
      this.title = 'Your account has been verificated!';
      this.message = '';
    }else if(this.activatedRoute.snapshot.url[0].path == 'verificate-account'){
      this.title = 'Activate your Account';
      this.message = 'Enter the code we send to your mail and activate your admin account.';
      this.username.patchValue(this.activatedRoute.snapshot.params.username);
      this.isActivating = true;
    }
   }

  ngOnInit(): void {
  }


  /**
   * Activate account 
   */
  activate(){
    if(this.username.valid && this.code.valid ){
      this.spinner.show();
      this.authService.confirmAccount(this.username.value,this.code.value)
    .then(res=>{
      this.snackBar.open('User confirmed','Ok',{duration:2000}).afterDismissed().subscribe(res=>{
        this.router.navigate(['/login']);
      })
      })
    .catch(err=>{
      console.log(err);
      if(TipicalExceptions.includes(err.status)){
        this.snackBar.open(err.error,'Ok',{duration:3000});
      }
    })
    .finally(()=>{
      this.spinner.hide();
    })
    }
  }
}
