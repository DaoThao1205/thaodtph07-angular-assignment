import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideComponent } from './slide/slide.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    HttpClientModule, AppRoutingModule],

  declarations: [ AppComponent, HelloComponent, SlideComponent, GalleryComponent, ProductListComponent, ProductDetailComponent, ProductManagerComponent ],
  
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
