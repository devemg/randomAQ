import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Category } from 'src/app/services/API.service-amplify';
import { LocalStorageService } from 'src/app/services/local-storage.service';

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
    __typename:'Category'
  };

  constructor(private activatedRouter: ActivatedRoute, private apiService: ApiService, private router: Router,
    private localService: LocalStorageService) { 
    const id = this.activatedRouter.snapshot.params.id;
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
    this.localService.setCategory(this.category);
    this.router.navigate(['/question']);
  }

}
