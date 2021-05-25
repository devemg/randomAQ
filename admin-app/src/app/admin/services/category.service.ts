import { Injectable } from '@angular/core';
import { APIService } from 'src/app/services/API.service';
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
  
  constructor(private apiGraphService: APIService) { }

   /**
   * Get list with all categories
   * @returns Categories list
   */
    getAllCategories(): Promise<Category[]> {
      return new Promise( async (resolve,reject)=>{
        let response = await this.apiGraphService.ListCategorys()
        let newResponse: Category[] = []; 
        if(response.items) {
          response.items.forEach(element => {
            if(element){
              newResponse.push({id:element.id,name:element.name,description:element.description,image:element.image});
            }
          });
        }else {
          reject('Categories not found')
        }
        resolve(newResponse);
      });
    }
  
    /**
     * Get category by id
     * @param id category
     * @returns category
     */
    getCategory(id: string):Promise< Category | undefined> {
      return this.apiGraphService.GetCategory(id);
    }
  
    /**
     * Save new category
     * @param category 
     */
    newCategory(category: Category): Promise<any> {
      return this.apiGraphService.CreateCategory(category);
    }

    /**
     * update category
     * @param category 
     * @returns 
     */
    updateCategory(category: Category): Promise<any> {
      return new Promise((resolve:any,reject:any)=>{
        resolve({});
      })
    }

    /**
     * Delete category
     * @param id 
     */
    deleteCategory(id: string): Promise<any> {
      return new Promise((resolve:any,reject:any)=>{
        resolve({});
      })
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
