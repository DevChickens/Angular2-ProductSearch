"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_list_component_1 = require('./product.list.component');
var ProductCategoryComponent = (function () {
    function ProductCategoryComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProductCategoryComponent.prototype, "categorys", void 0);
    ProductCategoryComponent = __decorate([
        core_1.Component({
            selector: 'product-category',
            template: "\n    <div class=\"category\" *ngFor=\"let category of categorys\">\n      <div *ngIf=\"category.product.length > 0\">\n        <h3>{{category.name}}</h3>\n        <product-list [products]=\"category.product\"></product-list>\n      </div>\n    </div>\n  ",
            directives: [product_list_component_1.ProductListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductCategoryComponent);
    return ProductCategoryComponent;
}());
exports.ProductCategoryComponent = ProductCategoryComponent;
//# sourceMappingURL=product.category.component.js.map