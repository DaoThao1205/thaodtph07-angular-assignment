import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
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
}