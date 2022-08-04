import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BaseService } from 'src/app/services/base.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: any
amount:number = 1
  @Output() item = new EventEmitter()
  baseUrl = `${BaseService.baseUrl}/`;

  constructor() { }

  ngOnInit(): void {
  }

add(){
  this.item.emit(this.product.idCategory)
}

}
