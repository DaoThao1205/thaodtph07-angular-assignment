import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';
import { ProductListComponent } from './frontend/product-list/product-list.component';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { HomeComponent } from './frontend/home/home.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { AboutUsComponent } from './frontend/about-us/about-us.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
   {path: 'admin', component: AdminComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashboardComponent},
        { path: 'products', component: ProductManagerComponent},
        { path: 'add-product', component: ProductAddComponent},
        { path: 'edit-product/:productID', component: ProductEditComponent},
      ]
   },
  {path: 'contact', component: ContactComponent},
  {path: 'aboutus', component: AboutUsComponent},
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
