import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './compoment/privet/categorys/add-category/add-category.component';
import { CategoryListComponent } from './compoment/privet/categorys/category-list/category-list.component';
import { UpdateCategoryComponent } from './compoment/privet/categorys/update-category/update-category.component';
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
    path:'update-product/:id',
    component: UpdateProductComponent
  },
  {
    path:'add-category',
    component: AddCategoryComponent
  },
  {
    path:'category-list',
    component: CategoryListComponent
  },
  {
    path:'update-category/:id',
    component: UpdateCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
