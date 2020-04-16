import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';
import { ProductListComponent } from './frontend/product-list/product-list.component';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { HomeComponent } from './frontend/home/home.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { AdminProductListComponent } from './backend/admin-product-list/admin-product-list.component';
import { AdminProductAddComponent } from './backend/admin-product-add/admin-product-add.component';
import { AboutUsComponent } from './frontend/about-us/about-us.component';
import { ContactComponent } from './frontend/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'manager', redirectTo: 'manager/product', pathMatch: 'full'},
  {path: 'manager/product', component: AdminProductListComponent},
  {path: 'manager/add-product', component: AdminProductAddComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'product/:productID', component: ProductDetailComponent},
  {path: 'product/edit/:productID', component: ProductEditComponent},
  {path: 'product/delete/:productID', component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
