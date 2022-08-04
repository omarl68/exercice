import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private productUrl = `${BaseService.baseUrl}/products/`;

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any>(this.productUrl);
  }

  getOneProducts(id: any) {
    return this.http.get<any>(this.productUrl + id)
  }

  deleteProducts(id: String) {
    return this.http.delete<any>(this.productUrl + id)
  }

  addProducts(product: any) {
    return this.http.post<any>(this.productUrl, product);
  }

  updateProducts(product: any, id:string) {
    return this.http.patch<any>(this.productUrl+id, product);
  }
}
