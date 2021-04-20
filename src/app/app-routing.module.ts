import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { AnonymousUserComponent } from './anonymous-user/anonymous-user.component';
import { CustomerCartComponent } from './customer/customer-cart/customer-cart.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerOrderComponent } from './customer/customer-order/customer-order.component';
import { CustomerProductComponent } from './customer/customer-product/customer-product.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { CustomerRegistrationComponent } from './customer/customer-registration/customer-registration.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: "customer-cart",
    component: CustomerCartComponent
  },
  {
    path: "anno-user",
    component: AnonymousUserComponent
  },
  {
    path: "admin-login",
    component: AdminLoginComponent
  },
  {
    path: "customer-login",
    component: CustomerLoginComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"admin-product-list",
    component: ListProductComponent
  },
  {
    path : 'product',
    component :  ListProductComponent
  },
  {
    path : 'edit-product/:prodId',
    component :  EditProductComponent
 },
 {
  path : 'customer-registration',
  component :  CustomerRegistrationComponent
},
{
  path: "customer-product",
  component: CustomerProductComponent
},
{
  path:'customer-profile',
  component: CustomerProfileComponent
},

{
  path: 'customer-order',
  component: CustomerOrderComponent

},
{ path : '' , component: HomeComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminLoginComponent]