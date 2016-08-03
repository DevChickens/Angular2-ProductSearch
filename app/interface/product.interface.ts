export interface Product {
  name : string;
  price : number;
  stock : number;
}

export interface Category{
  name : string;
  product : Product[];
}
