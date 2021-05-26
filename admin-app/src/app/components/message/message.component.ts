import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  title = 'Your account has been created!';
  message = 'Check your imbox and follow the instructions to activate your account.';

  constructor(private activatedRoute: ActivatedRoute) {
    if(this.activatedRoute.snapshot.url[0].path == 'verificated'){
      this.title = 'Your account has been verificated!';
      this.message = '';
    }else if(this.activatedRoute.snapshot.url[0].path == 'verificate-account'){
      this.title = 'Your account has been verificated!';
      this.message = '';
    }
   }

  ngOnInit(): void {
  }

}
