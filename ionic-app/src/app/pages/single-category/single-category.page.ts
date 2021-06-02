import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ExceptionCode } from 'src/const';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.page.html',
  styleUrls: ['./single-category.page.scss'],
})
export class SingleCategoryPage implements OnInit {

  category: Category = {
    image:'',
    name:'',
    description:'',
    id:'',
  };

  nothaveQuestions = false; 
  constructor(
    private activatedRouter: ActivatedRoute, 
    private apiService: ApiService, 
    private router: Router,
    public alertController: AlertController) {

    const id = this.activatedRouter.snapshot.params.id;
    this.nothaveQuestions = false;
    if(id){
      this.apiService.getCategory(id).then(res=>{
        this.category = res;
      })
    }
  }

  ngOnInit() {
  }

  /**
   * Start questions
   */
  start(){
    this.apiService.setQuestion(this.category.id).then(res=>{
      this.router.navigate(['/question']);
    }).catch(async err=>{
      if(err.status == ExceptionCode.NotFoundException) {
        this.nothaveQuestions = true;
      }
    });
  }

  /**
   * Back to categories
   */
  back() {
    this.router.navigate(['/categories']);
  }

}
