import { Component, OnInit } from '@angular/core';

import { ProductCategoryComponent } from './product.category.component'
import { Category } from '../interface/product.interface'
import { ProductService } from '../service/product.service' 
import { InputText } from '../ui/input.text.ui'

@Component({
  selector: 'product-search',
  template: `
    <h1>Product Search</h1>
    <inputText (getSearchValue)="getSearchValue($event)"></inputText>
    <input type="checkbox" [ngModel]="onlyStock" (click)="onCheckBoxChange($event)" /> Only Show Product Stock
    <h3><span>name</span> <span>price</span></h3>

    <product-category [categorys]="category"></product-category>
  `,
  directives: [ProductCategoryComponent, InputText],
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

  getSearchValue(value){
    this.category = this.ProductService.getSearchProductName(value); 
  }

  onCheckBoxChange() { 
    this.category = !this.onlyStock ? this.ProductService.getSearchProductStock() : this.ProductService.getProducts(); 
  };
  //onSearchBoxChange() { this.category = this.ProductService.getSearchProductName(this.search); };
}