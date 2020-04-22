import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductSearchComponent } from './product-search/product-search.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductComponent } from './product/product.component';
import { Ng5SliderModule } from 'ng5-slider';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SliderFilterPipe } from './slider-filter.pipe';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProductSearchComponent,
    HeaderComponent,
    ProductListComponent,
    SearchComponent,
    ProductFilterComponent,
    ProductComponent,
    ProductDetailComponent,
    SliderFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng5SliderModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
