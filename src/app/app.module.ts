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
import { HomeComponent } from './home/home.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminSlidebarComponent } from './admin-slidebar/admin-slidebar.component';
import { AdminTopbarComponent } from './admin-topbar/admin-topbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    HttpClientModule, AppRoutingModule],

  declarations: [ AppComponent, HelloComponent, SlideComponent, GalleryComponent, ProductListComponent, ProductDetailComponent, ProductManagerComponent, HomeComponent, ProductEditComponent, ProductAddComponent, HeaderComponent, FooterComponent, AdminSlidebarComponent, AdminTopbarComponent ],
  
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
