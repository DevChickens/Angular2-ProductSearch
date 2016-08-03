import { Component, Input, OnInit } from '@angular/core';
import { ProductListComponent } from './product.list.component';
import { Category } from '../interface/product.interface';

@Component({
  selector: 'product-category',
  template: `
    <div class="category" *ngFor="let category of categorys">
      <div *ngIf="category.product.length > 0">
        <h3>{{category.name}}</h3>
        <product-list [products]="category.product"></product-list>
      </div>
    </div>
  `,
  directives: [ProductListComponent]
})
export class ProductCategoryComponent{
  @Input() categorys: Category[];
}
