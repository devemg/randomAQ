import { Injectable } from '@angular/core';
import { Category } from '../models/category';

export const LS_KEYS = {
  Category:'category'
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  
  constructor() { }

  setCategory(category: Category){
    localStorage.setItem(LS_KEYS.Category,JSON.stringify({...category,description:null}));
  }

  getCategory(): Category {
    const itemString = localStorage.getItem(LS_KEYS.Category);
    if(itemString){
      return JSON.parse(itemString);
    }
    return null;
  }

}
