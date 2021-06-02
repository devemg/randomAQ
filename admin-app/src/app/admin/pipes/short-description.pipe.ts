import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    return value.length>200?value.slice(0,200)+'...':value;
  } 

}
