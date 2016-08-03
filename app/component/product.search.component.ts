import { Component, OnInit } from '@angular/core';

import { ProductCategoryComponent } from './product.category.component'
import { Category } from '../interface/product.interface'
import { ProductService } from '../service/product.service' 

@Component({
  selector: 'product-search',
  template: `
    <h1>Product Search</h1>
    <input type="text" [(ngModel)]="search" placeholder="search..." (ngModelChange)="onSearchBoxChange()"/><br />
    <input type="checkbox" [(ngModel)]="onlyStock" (click)="onCheckBoxChange()" /> Only Show Product Stock
    <!-- checkbox는 [(ngModel)]이 적용 안되나? [(ngModel)]음...-->
    <h3><span>name</span> <span>price</span></h3>

    <product-category [categorys]="category"></product-category>
  `,
  directives: [ProductCategoryComponent],
  providers: [ProductService]
})
export class ProductSearchComponent implements OnInit{
  search : string = '';
  onlyStock : boolean = false;
  category : Category[];

  constructor(private ProductService:ProductService){};

  ngOnInit(){
    this.category = this.ProductService.getProducts();
  }

  onCheckBoxChange() { 
    this.category = !this.onlyStock ? this.ProductService.getSearchProductStock() : this.ProductService.getProducts(); 
  };
  onSearchBoxChange() { this.category = this.ProductService.getSearchProductName(this.search); };
}