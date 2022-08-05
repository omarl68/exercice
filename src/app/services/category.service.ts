import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryUrl = `${BaseService.baseUrl}/categories/`;
  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<any>(this.categoryUrl);
  }

  getOneCategory(id: any) {
    return this.http.get<any>(this.categoryUrl + id)
  }

  deleteCategory(id: String) {
    return this.http.delete<any>(this.categoryUrl + id)
  }

  addCategory(category: Category) {
    return this.http.post<any>(this.categoryUrl, category);
  }

  updateCategory(category: Category,id:String) {
    return this.http.patch<any>(this.categoryUrl + id, category);
  }
 
}
