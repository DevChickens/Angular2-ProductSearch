import { Injectable } from '@angular/core';
import { Category } from '../interface/product.interface'

@Injectable()
export class ProductService {
  categorys: Category[] = [
    {
      name : 'sport',
      product : [
        {
          name : 'football',
          price : 5000,
          stock : 50
        },
        {
          name : 'baseball',
          price : 7000,
          stock : 0
        },
        {
          name : 'basketball',
          price : 3000,
          stock : 50
        }
      ]
    },
    {
      name : 'Electronics',
      product : [
        {
          name : 'IPhone',
          price : 5000,
          stock : 0
        }
      ]
    },
    {
      name : 'Computer',
      product : [
        {
          name : 'MacBook',
          price : 60000,
          stock : 5
        },
        {
          name : 'Serface',
          price : 40000,
          stock : 5
        }
      ]
    }
  ];

  getProducts() {
    console.log(
      this.categorys.map((item) => {
        return {
          name : item.name,
          product : item.product.filter((item) =>{
            return item.name.indexOf('IPhone') !== -1
          })
        }
      })
    );
    

    return this.categorys;
  };

  getSearchProductName(searchName){
    if(searchName === ''){
      return this.categorys;
    }else{
      return this.categorys.map((item) => {
        return {
          name : item.name,
          product : item.product.filter((item) =>{
            return item.name.indexOf(searchName) !== -1;
          })
        }
      });
    }
  };

  getSearchProductStock(){
    return this.categorys.map((item) => {
      return {
        name : item.name,
        product : item.product.filter((item) =>{
          return item.stock > 0;
        })
      }
    });
    
  };
}
