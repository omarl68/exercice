import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './compoment/privet/dashboard/dashboard.component';
import { AddProductComponent } from './compoment/privet/products/add-product/add-product.component';
import { ProductListComponent } from './compoment/privet/products/product-list/product-list.component';
import { UpdateProductComponent } from './compoment/privet/products/update-product/update-product.component';
import { HomeComponent } from './compoment/public/home/home.component';
import { PanierComponent } from './compoment/public/panier/panier.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'panier',
    component: PanierComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'add-product',
    component: AddProductComponent
  },
  {
    path:'porduct-list',
    component: ProductListComponent
  },
  {
    path:'update-product',
    component: UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
