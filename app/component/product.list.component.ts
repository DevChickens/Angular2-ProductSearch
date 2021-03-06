import { Component, Input } from '@angular/core';
import { Product } from '../interface/product.interface'

@Component({
  selector: 'product-list',
  template: `
    <div class="list">
      <!--template 사용하기-->
      <div *ngFor="let product of products">
        <span>{{product?.name}}</span> {{product.price}}
      </div>
    </div>
  `,
})
export class ProductListComponent {
  @Input() products:Product[];
}
