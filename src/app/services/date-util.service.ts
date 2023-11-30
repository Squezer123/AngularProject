import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  toFormattedString(date: Date) {
    const el: string[] = ["dd","mm","yyyy"];
    let retDate = '';
    let tmp: number;
    el.forEach((element, index) => {
        if (index > 0) { retDate += '-'; }
        switch (element) {
          case 'dd': tmp = date.getDate(); break;
          case 'mm': tmp = date.getMonth() + 1; break;
          default: retDate += date.getFullYear();
        }
        if (element !== 'yyyy') {
          tmp < 10 ? retDate += '0' + tmp : retDate += tmp;
        }
      }
    );

    return retDate;
  }
}
