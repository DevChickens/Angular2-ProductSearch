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
var ProductService = (function () {
    function ProductService() {
        this.categorys = [
            {
                name: 'sport',
                product: [
                    {
                        name: 'football',
                        price: 5000,
                        stock: 50
                    },
                    {
                        name: 'baseball',
                        price: 7000,
                        stock: 0
                    },
                    {
                        name: 'basketball',
                        price: 3000,
                        stock: 50
                    }
                ]
            },
            {
                name: 'Electronics',
                product: [
                    {
                        name: 'IPhone',
                        price: 5000,
                        stock: 0
                    }
                ]
            },
            {
                name: 'Computer',
                product: [
                    {
                        name: 'MacBook',
                        price: 60000,
                        stock: 5
                    },
                    {
                        name: 'Serface',
                        price: 40000,
                        stock: 5
                    }
                ]
            }
        ];
    }
    ProductService.prototype.getProducts = function () {
        console.log(this.categorys.map(function (item) {
            return {
                name: item.name,
                product: item.product.filter(function (item) {
                    return item.name.indexOf('IPhone') !== -1;
                })
            };
        }));
        return this.categorys;
    };
    ;
    ProductService.prototype.getSearchProductName = function (searchName) {
        if (searchName === '') {
            return this.categorys;
        }
        else {
            return this.categorys.map(function (item) {
                return {
                    name: item.name,
                    product: item.product.filter(function (item) {
                        return item.name.indexOf(searchName) !== -1;
                    })
                };
            });
        }
    };
    ;
    ProductService.prototype.getSearchProductStock = function () {
        return this.categorys.map(function (item) {
            return {
                name: item.name,
                product: item.product.filter(function (item) {
                    return item.stock > 0;
                })
            };
        });
    };
    ;
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map