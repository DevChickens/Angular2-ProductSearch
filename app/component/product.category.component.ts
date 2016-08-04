import { Component, Input, OnInit } from '@angular/core';
import { ProductListComponent } from './product.list.component';
import { Category } from '../interface/product.interface';

@Component({
  selector: 'product-category',
  template: `
    <!--<table>
      <thead>
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      </thead>
      <tfoot>
      <tr>
          <td>Sum</td>
          <td>$180</td>
      </tr>y
      </tfoot>
      <tbody>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
      <tr>
          <td>February</td>
          <td>$80</td>
      </tr>
      </tbody>
    </table>-->

    <!--<div class="category" *ngFor="let category of categorys">
      <div *ngIf="category?.product.length > 0">
        <h3>{{category?.name}}</h3>
        <product-list [products]="category?.product"></product-list>
      </div>
    </div>-->

    <template ngFor let-category [ngForOf]="categorys">
      <template [ngIf]="category?.product.length > 0">
        <h3>{{category?.name}}</h3>
        <product-list [products]="category?.product"></product-list>
      </template>
    </template>

  `,
  inputs:["categorys"],
  directives: [ProductListComponent]
})
export class ProductCategoryComponent{
  //@Input() categorys: Category[];
}
