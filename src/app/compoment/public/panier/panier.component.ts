import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  productList: any[] = []
  cartProducts: any[] = []
  cartNumber: any;
  totalPrice:any;

  constructor() { }
  baseUrl = `${BaseService.baseUrl}/`;
  ngOnInit(): void {
    let products = JSON.parse(localStorage.getItem('cart')!)
    console.log(products);
    this.productList = products

    this.cartNumber = JSON.parse(localStorage.getItem('cart-Number')!);
    if (this.cartNumber == null) {
      this.cartNumber = 0
    }
  }
  add(event: any) {
    let products = this.productList.find((prod) => { return prod.idCategory == event })
    products.qte++
    this.cartProducts.push(products)
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
  }
  moin(event: any) {
    let products = this.productList.find((prod) => { return prod.idCategory == event })
    if (products.qte > 1) {
      products.qte--
      this.cartProducts.push(products)
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    }
    else {
      alert("le qte min = 1")
    }
  }
  removeitem(event: any) {
    let products = this.productList.find((prod) => { return prod.idCategory == event })
    let index = this.productList.indexOf(products)
    
    this.cartNumber = Number(this.cartNumber) - this.productList[index].qte
    localStorage.setItem('cart-Number', this.cartNumber)
    this.productList.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(this.productList))
   
  }
  somme(){
    for (let product of this.productList) {

      this.totalPrice += (product.prix * product.qte)
  }
  if (this.totalPrice == null) {
    this.totalPrice = 0
}
}

}
