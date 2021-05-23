import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  
  constructor(private httpClient: HttpClient) { }

   /**
   * Get list with all categories
   * @returns Categories list
   */
    getAllCategories(): Observable<Category[]> {
      return this.httpClient.get<Category[]>(`${environment.URL_API}/category`);
    }
  
    /**
     * Get category by id
     * @param id category
     * @returns category
     */
    getCategory(id: string):Observable< Category | undefined> {
      return this.httpClient.get<Category>(`${environment.URL_API}/category/${id}`);

    }
  
    /**
     * Save new category
     * @param category 
     */
    newCategory(category: Category): Observable<any> {
      return this.httpClient.post(`${environment.URL_API}/category`,JSON.stringify(category));
    }

    /**
     * update category
     * @param category 
     * @returns 
     */
    updateCategory(category: Category): Observable<any> {
      return this.httpClient.put(`${environment.URL_API}/category`,JSON.stringify(category));
    }

    /**
     * Delete category
     * @param id 
     */
    deleteCategory(id: number): Observable<any> {
      return this.httpClient.delete(`${environment.URL_API}/category/${id}`);
    }

    /**
     * Get images to asign category
     * @returns images array
     */
    getImages(): Observable<Image[]> {
      return new Observable(observer=>{
        observer.next(this.images);
      });
    }
}

//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
