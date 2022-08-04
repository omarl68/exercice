import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compoment/public/home/home.component';
import { PanierComponent } from './compoment/public/panier/panier.component';
import { DashboardComponent } from './compoment/privet/dashboard/dashboard.component';
import { NavbarComponent } from './compoment/public/navbar/navbar.component';
import { DisplayProductsComponent } from './compoment/public/display-products/display-products.component';
import { SideBarComponent } from './compoment/privet/side-bar/side-bar.component';
import { TopBarComponent } from './compoment/privet/top-bar/top-bar.component';
import { ProductListComponent } from './compoment/privet/products/product-list/product-list.component';
import { AddProductComponent } from './compoment/privet/products/add-product/add-product.component';
import { UpdateProductComponent } from './compoment/privet/products/update-product/update-product.component';
import { CategoryListComponent } from './compoment/privet/categorys/category-list/category-list.component';
import { AddCategoryComponent } from './compoment/privet/categorys/add-category/add-category.component';
import { UpdateCategoryComponent } from './compoment/privet/categorys/update-category/update-category.component';
import { ProductItemComponent } from './compoment/public/product-item/product-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanierComponent,
    DashboardComponent,
    NavbarComponent,
    DisplayProductsComponent,
    SideBarComponent,
    TopBarComponent,
    ProductListComponent,
    AddProductComponent,
    UpdateProductComponent,
    CategoryListComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
