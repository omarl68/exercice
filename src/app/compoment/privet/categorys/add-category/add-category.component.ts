import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
  ) {
    let category = {
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    };
    this.myForm = this.fb.group(category);
  }

  ngOnInit(): void {}

  get name() {
    return this.myForm.get('name');
  }

  add() {
    let data = this.myForm.value;
    let category = new Category( data.name);
      this.categoryService.addCategory(category).subscribe({
        next: (result) => {
          console.log(result);
          this.router.navigate(['/category-list']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

}
