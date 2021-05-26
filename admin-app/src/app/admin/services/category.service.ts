import { Injectable } from '@angular/core';
import { APIService, CreateCategoryInput, CreateCategoryMutation, DeleteCategoryMutation, GetCategoryQuery, ModelCategoryFilterInput, UpdateCategoryInput, UpdateCategoryMutation } from '../../services/API.service';
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
   * Get all questions
   */
   getAllCategories():Promise<Category[]> {
    return new Promise( async (resolve:any,reject:any)=>{
      let response = await this.apiGraphService.ListCategorys()
      if(response.items) {
        resolve(response.items);
      }else {
        reject('Categories not found')
      }
    });
  }
  
    /**
     * Get category by id
     * @param id category
     * @returns category
     */
    getCategory(id: string):Promise<GetCategoryQuery> {
      return this.apiGraphService.GetCategory(id);
    }
  
    /**
     * Save new category
     * @param category 
     */
    newCategory(category: CreateCategoryInput): Promise<CreateCategoryMutation> {
      return this.apiGraphService.CreateCategory(category);
    }

    /**
     * update category
     * @param category 
     * @returns 
     */
    updateCategory(id: string, category: UpdateCategoryInput): Promise<UpdateCategoryMutation> {
      return this.apiGraphService.UpdateCategory( {...category, id });
    }

    /**
     * Delete category
     * @param id 
     */
    deleteCategory(id: string): Promise<DeleteCategoryMutation> {
      return this.apiGraphService.DeleteCategory({id});
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
