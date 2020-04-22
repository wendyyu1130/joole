import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'productsearch', component: ProductSearchComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'producttotal', component: ProductComponent },
  { path: 'productdetail', component: ProductDetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }