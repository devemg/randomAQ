import { Injectable } from '@angular/core';
import { Category } from './API.service-amplify';
export const LS_KEYS = {
  CATEGORY:'category',
  TIME:'time-clock'
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  
  constructor() { }

  /**
   * save category in local storage
   * @param category 
   */
  setCategory(category: Category){
    localStorage.setItem(LS_KEYS.CATEGORY,JSON.stringify({...category,description:null}));
  }

  /**
   * get category from localStorage
   * @returns category
   */
  getCategory(): Category {
    const itemString = localStorage.getItem(LS_KEYS.CATEGORY);
    if(itemString){
      return JSON.parse(itemString);
    }
    return null;
  }

  /**
   * save time clock in local storage
   * @param category 
   */
   setTimeClock(time:number){
    localStorage.setItem(LS_KEYS.TIME,time.toString());
  }

  /**
   * get time clock from localStorage
   * @returns category
   */
  getTimeClock(): number {
    const itemString = localStorage.getItem(LS_KEYS.TIME);
    if(itemString){
      return Number(itemString);
    }
    return 30;
  }

}
