import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideComponent } from './slide/slide.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SlideComponent, GalleryComponent, ProductListComponent, ProductDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
