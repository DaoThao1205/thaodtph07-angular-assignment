import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})

export class ProductManagerComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService
  ) {
    console.log('constructor')
   }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
   this.productService.getProducts().subscribe(data => {
     console.log(data);
     this.products = data;
    });
  }
  removeItem(id){
   // this.products = this.productService.removeProduct(id);
    // this.products = this.products.filter(product => product.id != id);
  }


  // changeStatus(){
  //   // this.product.status = !this.product.status;
  // }
  // changeName(e){
  //   // this.product.name = e.target.value;
  // }
  // removeItem(id){
  //   this.products = this.products.filter(product => product.id != id);
  // }

  // showDetail(product){
  //   console.log(product);
  //   this.selected = product;
  // }
  // Edit(product){
    
  // }
}

