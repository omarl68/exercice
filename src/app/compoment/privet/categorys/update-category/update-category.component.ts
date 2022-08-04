import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  updateCategoryForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,

  ) {
    this.updateCategoryForm = this.fb.group({
      name: new FormControl(),
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];
    this.categoryService.getOneCategory(id).subscribe({
      next: (result) => {
        let category = result;
        this.updateCategoryForm.patchValue({
          name: category.name,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  update() {
    let data = this.updateCategoryForm.value;
    let idUser = this.route.snapshot.paramMap.get('id');
    let user = new Category(data.name, idUser!);

    this.categoryService.updateCategory(user).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.router.navigate(['/category-list']);
        },
        error: (err) => {
          console.log(err);
        }
      }
    )

  }
}


