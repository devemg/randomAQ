import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit,OnDestroy,AfterViewInit {

  minutes = 1; 
  seconds = 0;
  
  clockInterval: any = null; 
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
   this.minutes = 1; 
   this.seconds = 59; 
   //this.startClock();
  }

  ngOnDestroy() {
    this.stopClock();
  }

  /**
   * starts clock
   */
  startClock() {
    this.clockInterval = setInterval(this.count,1000);
  }

  /**
   * stops clock
   */
  stopClock() {
    if(this.clockInterval){
      clearInterval(this.clockInterval);
    }
  }

  /**
   * Back count clock
   */
  count() {
    console.log(this.minutes,':',this.seconds);
    if(this.seconds > 0) {
      this.seconds--; 
    }else {
      this.seconds = 59; 
     // this.minutes--;
    }

    /*
    if(this.minutes <= 0) {
      this.stopClock();
    }*/
  }


}
