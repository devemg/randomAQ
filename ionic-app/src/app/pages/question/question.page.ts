import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Category, Question } from 'src/app/services/API.service-amplify';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ClockComponent } from './clock/clock.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit, AfterViewInit {
  @ViewChild(ClockComponent,{static:false}) clock: ClockComponent;

  category: Category = {
    image:'',
    name:'',
    __typename:'Category'
  };

  question: Question = {
    answer:'',
    content:'',
    __typename:'Question'
  };

  running = true; 
  time: number = 0;
  constructor(private localService: LocalStorageService, private apiService: ApiService, private router: Router,
    public alertController: AlertController,private nativeAudio: NativeAudio
    ) { }

  ngOnInit() {
    this.category = this.localService.getCategory();
    this.question = this.apiService.getQuestion();
    this.nativeAudio.preloadSimple('time-over', '/assets/sounds/short-alarm.wav')
    .then(()=>console.log("sound loaded"), (ex)=>console.log("sound not loaded",ex));
  }

  ngAfterViewInit() {
    this.running = true;
    this.clock.setTime(this.localService.getTimeClock());
    this.clock.start();
  }



  /**
   * exec if the answer is wrong
   */
  badAnswer() {
    this.clock.stop(false);
    this.running = false;
  }

  /**
   * exec if the answer is fine
   */
  coolAnswer() {
    this.clock.stop(false);
    this.running = false;
  }

  /**
   * Go back to categories
   */
  back() {
    this.router.navigate(['/categories']);
  }

  /**
   * Show message if thime is over
   */
  async timeover() {
    this.running = false;
    const alert = await this.alertController.create({
      header: '¡El tiempo acabó!',
      subHeader: '',
      message: 'El tiempo ha terminado.',
      buttons: ['OK']
    });
    this.playAlarm();
    await alert.present();
  }

  /**
   * Play sound if time is out
   */
  playAlarm() {
      this.nativeAudio.play('time-over')
      .then(()=>console.log("play sound"), ()=>console.log("not play sound "));
  }


}
