import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  images: Image[] = [
    {
      name:'elephant',
      url:'https://res.cloudinary.com/devemg/image/upload/v1621289170/randomAQ/category-icons/022-elephant_qzrskn.png',
      id:'1'
    },
    {
      name:'heart',
      url:'https://res.cloudinary.com/devemg/image/upload/v1621289170/randomAQ/category-icons/021-heart_yu2e8e.png',
      id:'2'
    },
    {
      name:'crab',
      url:'https://res.cloudinary.com/devemg/image/upload/v1621289170/randomAQ/category-icons/020-crab_nbv3p5.png',
      id:'3'
    },
    {
      name:'boat',
      url:'https://res.cloudinary.com/devemg/image/upload/v1621289169/randomAQ/category-icons/019-boat_oai4ed.png',
      id:'4'
    },
    {
      name:'pig',
      url:'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/010-pig_k5qkiw.png',
      id:'5'
    }
  ];
  
  constructor(private http: HttpClient) { }

  /**
   * Get all questions
   */
   getAllCategories():Promise<Category[]> {
    return this.http.get<Category[]>(`${environment.API_CATEGORIES}`).toPromise();
  }
  
    /**
     * Get category by id
     * @param id category
     * @returns category
     */
    getCategory(id: string):Promise<Category> {
      return this.http.get<Category>(`${environment.API_CATEGORIES}/${id}`).toPromise();
    }
  
    /**
     * Save new category
     * @param category 
     */
    newCategory(category: Category): Promise<any> {
      return this.http.post(`${environment.API_CATEGORIES}`,JSON.stringify(category)).toPromise();
    }

    /**
     * update category
     * @param category 
     * @returns 
     */
    updateCategory(id: string, category: Category): Promise<any> {
      return this.http.put(`${environment.API_CATEGORIES}`,JSON.stringify(category)).toPromise();
    }

    /**
     * Delete category
     * @param id 
     */
    deleteCategory(id: string): Promise<any> {
      return this.http.delete(`${environment.API_CATEGORIES}/${id}`).toPromise();
    }

    /**
     * Get images to asign category
     * @returns images array
     */
    getImages(): Promise<Image[]> {
      return new Promise((resolve:any,reject:any)=>{
        resolve(this.images);
      });
    }
}

//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
