import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryList: any[] = [];
  baseUrl = `${BaseService.baseUrl}/`;
  constructor(
    private categoryService: CategoryService,
 
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

}
delete(id: string, index: number) {
  this.categoryList.splice(index, 1);
  this.categoryService.deleteCategory(id).subscribe({
    next: (result) => {
      console.log(result);
     
    },
    error: (err) => {
      console.log(err);
    },
  });
}}
