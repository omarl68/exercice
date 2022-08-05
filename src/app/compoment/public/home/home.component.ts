import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { BaseService } from 'src/app/services/base.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: any [] = [];
  productList: any[] = [];
  cartProducts: any[] = [];
  Products: any[] = [];
  baseUrl = `${BaseService.baseUrl}/`;
  cartNumber: any;
  

  constructor(private productService: ProductService, private route: ActivatedRoute,  private categoryService: CategoryService,) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (result) => {
        this.categories = result;
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.productService.getAllProducts().subscribe({
      next: (result) => {
        this.productList = result;
        console.log(this.productList);
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.cartNumber = JSON.parse(localStorage.getItem('cart-Number')!);
    if (this.cartNumber == null) {
      this.cartNumber = 0
    }


    this.Products = JSON.parse(localStorage.getItem('cart')!)
    if (this.Products != null) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
  }
  }
  addToCart(event: any) {
    this.cartNumber = Number(this.cartNumber) + 1
    localStorage.setItem("cart-Number", JSON.stringify(this.cartNumber))

    // let product = Product.find((prod)=>{return prod.idCategory == event.item.idCategory})
    let products = this.productList.find((prod) => { return prod.idCategory == event })
    // this.cartProducts.find(item => item.id == event.id)
    let productInCart = this.cartProducts.find((prod) => { return prod.idCategory == event })


    if (productInCart == null) {

      products.qte = 1
      this.cartProducts.push(products)
    } else {
      let index = this.cartProducts.indexOf(productInCart)
      this.cartProducts[index].qte++
    }


    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    
  }


}
/*if ("cart" in localStorage) {
  this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
  let exist = this.cartProducts.find(item => item.id == event.id)
  if (exist) {
    //alert("product is alerady in cart")
   event.qte++
   this.cartProducts.push(event)
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

}
else {
  event.qte = 1
  this.cartProducts.push(event)
  localStorage.setItem("cart", JSON.stringify(this.cartProducts))
}
}*/