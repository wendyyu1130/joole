import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'sliderFilter',
  pure: false
})
export class SliderFilterPipe implements PipeTransform {

  transform(items: any, value1: number, value2: number, excludes: any = []):  any {
    if (!value1 || !value2 || !items) return items;
    return SliderFilterPipe.filter(items, value1, value2, excludes);
}

static filter(items: Array<{ [key: string]: any }>, value1: number, value2: number, excludes: any): Array<{ [key: string]: any }>{
  function checkInside(item: any, value1: number, value2: number) {
      
    if (value1 <= item.airflow && item.airflow <= value2) {
      return true;
    }

  
  return false;

  }

  return items.filter(function (item) {
    return checkInside(item, value1, value2);
  });
}
}
