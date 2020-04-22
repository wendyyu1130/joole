import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  // @Output() onFilterSubmit = new EventEmitter<number>();


  minairflow:  number = 2000;
  maxairflow: number = 10000;
  options: Options = {
    floor: 0,
    ceil: 10000,
    hideLimitLabels: true,
    hidePointerLabels: true
  };

  minpower: number = 9.84;
  maxpower: number = 96.52;
  minsoundspeed: number = 20;
  maxsoundspeed: number = 80;
  mindiameter: number = 18;
  maxdiameter: number = 96;
  minheight: number = 18;
  maxheight: number = 96;
  options1: Options = {
    floor: 0,
    ceil: 100,
    hideLimitLabels: true,
    hidePointerLabels: true
  };
  

  constructor() { }

  ngOnInit(): void {
  }

 
  
  onFilterClear() {


  }

  onFilterSubmit(){

  }



  


}
