import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // categs: string[] = ['HVAC Fans'];
  //  subCategs: string[] = [];



  constructor() { }

  ngOnInit(): void {
  }

  

    @Input() product: Product;



  }





