import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categoryList: any[] = [];
  baseUrl = BaseService.baseUrl;
  articleList: any[] = [];
  
  constructor(
    private articleService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (result) => {
        this.categoryList = result;
        console.log(this.categoryList);
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.articleService.getAllProducts().subscribe({
      next: (result) => {
        this.articleList = result;
        console.log(this.articleList);
      },
      error: (error) => {
        console.log(error);
      },
    });

  }

  delete(id: string, index: number) {
    this.articleList.splice(index, 1);
    this.articleService.deleteProducts(id).subscribe({
      next: (result) => {
        console.log(result);
 
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
