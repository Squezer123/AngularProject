import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from "../domain/quiz.model";

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(quizy: Quiz[], nazwa: string): Quiz[] {
    if(nazwa === "") {
      return quizy;
    }

    return quizy.filter((quiz) => quiz.nazwa.toLowerCase().includes(nazwa.toLowerCase()));
  }

}
