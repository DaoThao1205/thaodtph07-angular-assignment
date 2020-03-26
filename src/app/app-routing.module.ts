import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'manager', component: ProductManagerComponent},

  {path: 'product', component: ProductListComponent},
  {path: 'product/:productID', component: ProductDetailComponent},

  {path: 'product/delete/:productID', component: ProductListComponent},

 // {path: 'product/:id', component: ProductDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
