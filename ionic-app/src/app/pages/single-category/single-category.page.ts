import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
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
  constructor(private activatedRouter: ActivatedRoute, private apiService: ApiService, private router: Router) { 
    const id = this.activatedRouter.snapshot.params.id;
    if(id){
      this.apiService.getCategory(id).then(res=>{
        this.category = res;
        if(this.category.questions.length == 0) {
          this.nothaveQuestions = true;
        }
      })
    }
  }

  ngOnInit() {
  }

  /**
   * Start questions
   */
  start(){
    this.apiService.setQuestion(this.category.questions);
    this.router.navigate(['/question']);
  }

}
