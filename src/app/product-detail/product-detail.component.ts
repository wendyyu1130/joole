import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductDetailsService } from '../service/product-details.service'
import {ProductDetails} from '../model/product-details'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

 
 
 subCateId: string;
  subCateName: string[] = ['HVAC Fans'];

  // tech_spec_title: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private productDetailsService: ProductDetailsService) { }

  subscription: Subscription;


  id: any;
  products :ProductDetails[];
  product :any;
  // product = [];


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log('Url Id: ', this.id);
    });

    this.subscription = this.productDetailsService.getProductDetails().subscribe(
      data => {
      console.log(data, "plzzzzz");
      this.products = data.filter(product =>{
        return product.id === this.id;
      })
      return this.product = data[0];
      // console.log(this.products[0].id)
    })
  }



  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
