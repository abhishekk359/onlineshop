import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { exception } from 'node:console';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import { User } from '../User';
//import { exception } from 'node:console';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  customer: User={
    customerId: 0,
    password:''
  }

  errormsg:any;

 customerUser: any;

  constructor(private customerService: CustomerService,
    private router: Router) { 
    this.errormsg = '';
    
  }

  ngOnInit(): void {
  }
  
  getCustomerById(){
    let user = {
      customerId: this.customer.customerId,
    
      password: this.customer.password

    }
        this.customerService.getCustomerById(user.customerId).subscribe(response => {
          console.log(response);
          this.customerUser = response;
          if(this.customerUser.password == user.password)
          {
            //this.router.navigate(["/customer-product",  { queryParams: { val: customer.customerId }}]);
            this.router.navigate(['/customer-product'], { queryParams: { val: this.customerUser.customerId }});
          }
          else {
           // console.log("invalid password");
           this.errormsg = "invalid password";
          }
          //this.router.navigate(["/customer-login"]);
        },err => {
          /// here the function that you want you can check the status of the 
          ///error
          if(err.status == 404) {
            /// you can check for any status like 404 not found 
            //console.log("invalid UserName");
            this.errormsg = "invalid UserName";
          } 
      }
        );

  }

}
