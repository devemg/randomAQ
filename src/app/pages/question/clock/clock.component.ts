import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit,OnDestroy,AfterViewInit {

  minutes = 0; 
  seconds = 0;
  
  clockSub: Subscription = null; 
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
   //this.startClock();
  }

  ngOnDestroy() {
    this.stop();
  }

  /**
   * starts clock
   */
  start() {
    this.minutes = 0; 
    this.seconds = 59; 
    this.clockSub = interval(1000).subscribe(_=>this.count());
  }

  /**
   * stops clock
   */
  stop() {
    if(this.clockSub){
     this.clockSub.unsubscribe();
    }
    this.minutes = 0;
    this.seconds = 0;
  }

  /**
   * Back count clock
   */
  private count() {
    if(this.seconds > 0) {
      this.seconds--; 
    }else {
      this.seconds = 59; 
      this.minutes--;
    }
    if(this.minutes < 0) {
      this.stop();
    }
  }


}
