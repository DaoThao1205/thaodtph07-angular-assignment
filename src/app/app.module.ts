import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideComponent } from './frontend/slide/slide.component';
import { GalleryComponent } from './frontend/gallery/gallery.component';
import { ProductListComponent } from './frontend/product-list/product-list.component';
import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';
import { ProductService } from './product.service';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './frontend/home/home.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { HeaderComponent } from './frontend/header/header.component';
import { FooterComponent } from './frontend/footer/footer.component';
import { AdminSlidebarComponent } from './backend/admin-slidebar/admin-slidebar.component';
import { AdminTopbarComponent } from './backend/admin-topbar/admin-topbar.component';
import { AboutUsComponent } from './frontend/about-us/about-us.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    HttpClientModule, AppRoutingModule],

  declarations: [ AppComponent, HelloComponent, SlideComponent, GalleryComponent, ProductListComponent, ProductDetailComponent, ProductManagerComponent, HomeComponent, ProductEditComponent, ProductAddComponent, HeaderComponent, FooterComponent, AdminSlidebarComponent, AdminTopbarComponent, AboutUsComponent, ContactComponent, AdminComponent, DashboardComponent ],
  
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
