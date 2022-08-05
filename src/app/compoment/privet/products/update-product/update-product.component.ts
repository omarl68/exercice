import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {


  productsList: any[] = [];
  categoryList: any[] = [];
  myForm: any = FormGroup;
  selectedFile: any;
  imageUrl = 'assets/img/default.jpg';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    let formControls = {
      name: new FormControl(''),
      description: new FormControl(''),
      idCategory: new FormControl(''),
      price: new FormControl(''),
    };

    this.myForm = this.fb.group(formControls);
  }
  get name() {
    return this.myForm.get('name');
  }
  get description() {
    return this.myForm.get('description');
  }
  get idCategory() {
    return this.myForm.get('idCategory');
  }
  get price() {
    return this.myForm.get('price');
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (result) => {
        this.productsList = result;
        console.log(this.productsList);
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.categoryService.getAllCategories().subscribe({
      next: (result) => {
        this.categoryList = result;
        console.log(this.categoryList);
      },
      error: (error) => {
        console.log(error);
      },
    });
    let id = this.route.snapshot.params?.['id'];
    this.productService.getOneProducts(id).subscribe({
      next: (result) => {
        let product = result;
        console.log(result);
        this.myForm.patchValue({
          name: product.name,
          description: product.description,
          idCategory: product.category._id,
          price: product.price,
        });
        this.imageUrl += product.image;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  save(event: any) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => {
      // called once readAsDataURL is completed
      this.imageUrl = (event.target as FileReader).result!.toString();
    };

    this.selectedFile = event.target.files[0];
  }

  update() {
    let data = this.myForm.value;
    // let idUser = this.route.snapshot.paramMap.get('id');
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('description', data.description);
    formData.append('idCategory', data.idCategory);
    formData.append('picture', this.selectedFile);
    this.productService.addProducts(formData).subscribe({
      next: (result) => {
        console.log(result);

        this.router.navigate(['/product-list']);
      },
      error: (err) => {

        console.log(err);
      },
    });
  }

}
