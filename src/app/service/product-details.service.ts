import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  {ProductDetails}  from '../model/product-details'

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http:HttpClient) { }

  private _url: string = "/assets/product-details.json";

  getProductDetails(): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>(this._url);
  }
}