import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit,OnDestroy {
  @Output('timeover') timeover = new EventEmitter<boolean>();

  minutes = 0; 
  seconds = 0;
  
  clockSub: Subscription = null; 
  constructor() { }

  ngOnInit() {
    this.setTime(60);
  }

  ngOnDestroy() {
    this.stop(false);
  }

  /**
   * Transform seconds to minutes and second
   * @param seconds 
   */
   setTime(seconds:number){
    if(seconds<60) {
      this.seconds = seconds;
      this.minutes = 0;
    }else if (seconds == 60){
      this.seconds = 59;
      this.minutes = 0;
    }else {
      this.minutes = seconds/60;
      this.seconds = seconds%60;
    }
  }

  /**
   * starts clock
   */
  start() {
    this.clockSub = interval(1000).subscribe(_=>this.count());
  }

  /**
   * stops clock
   */
  stop(value: boolean) {
    if(this.clockSub){
     this.clockSub.unsubscribe();
    }
    this.minutes = 0;
    this.seconds = 0;
    if(value){
      this.timeover.emit(value);
    }

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
      this.stop(true);
    }
  }


}
