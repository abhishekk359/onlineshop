import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './navbar/navbar-header/navbar-header.component';
import { NavbarFooterComponent } from './navbar/navbar-footer/navbar-footer.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './admin/product/edit-product/edit-product.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { ProductItemComponent } from './admin/product/list-product/product-item/product-item.component';
import{HttpClientModule} from '@angular/common/http';
import { CustomerRegistrationComponent } from './customer/customer-registration/customer-registration.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerProductComponent } from './customer/customer-product/customer-product.component';
import { NavbarAdminComponent } from './navbar/navbar-admin/navbar-admin.component';
import { NavbarCustomerComponent } from './navbar/navbar-customer/navbar-customer.component';
import { AnonymousUserComponent } from './anonymous-user/anonymous-user.component';
import { CustomerCartComponent } from './customer/customer-cart/customer-cart.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { CustomerOrderComponent } from './customer/customer-order/customer-order.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarHeaderComponent,
    NavbarFooterComponent,
    AdminLoginComponent,

    HomeComponent,
     EditProductComponent,
     ListProductComponent,
     ProductItemComponent,
     CustomerRegistrationComponent,
     CustomerLoginComponent,
     CustomerProductComponent,
     NavbarAdminComponent,
     NavbarCustomerComponent,
     AnonymousUserComponent,
     CustomerCartComponent,
     CustomerProfileComponent,
     CustomerOrderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
