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
var product_category_component_1 = require('./product.category.component');
var product_service_1 = require('../service/product.service');
var ProductSearchComponent = (function () {
    function ProductSearchComponent(ProductService) {
        this.ProductService = ProductService;
        this.search = '';
        this.onlyStock = false;
    }
    ;
    ProductSearchComponent.prototype.ngOnInit = function () {
        this.category = this.ProductService.getProducts();
    };
    ProductSearchComponent.prototype.onCheckBoxChange = function () {
        this.category = !this.onlyStock ? this.ProductService.getSearchProductStock() : this.ProductService.getProducts();
    };
    ;
    ProductSearchComponent.prototype.onSearchBoxChange = function () { this.category = this.ProductService.getSearchProductName(this.search); };
    ;
    ProductSearchComponent = __decorate([
        core_1.Component({
            selector: 'product-search',
            template: "\n    <h1>Product Search</h1>\n    <input type=\"text\" [(ngModel)]=\"search\" placeholder=\"search...\" (ngModelChange)=\"onSearchBoxChange()\"/><br />\n    <input type=\"checkbox\" [(ngModel)]=\"onlyStock\" (click)=\"onCheckBoxChange()\" /> Only Show Product Stock\n    <!-- checkbox\uB294 [(ngModel)]\uC774 \uC801\uC6A9 \uC548\uB418\uB098? [(ngModel)]\uC74C...-->\n    <h3><span>name</span> <span>price</span></h3>\n\n    <product-category [categorys]=\"category\"></product-category>\n  ",
            directives: [product_category_component_1.ProductCategoryComponent],
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());
exports.ProductSearchComponent = ProductSearchComponent;
//# sourceMappingURL=product.search.component.js.map