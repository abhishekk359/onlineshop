import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {


  allCustomer: any;

  successMsg : any;

  customer: Customer={
    customerId:'',
    fullName:'',
    mobileNumber:'',
    email:'',
    password:''
  }
 
  
  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {

    this.successMsg = '';
  }
 
  addCustomer(){
    let customer = {
      customerId: 0,
      fullName: this.customer.fullName,
      mobileNumber: this.customer.mobileNumber,
      email: this.customer.email,
      password: this.customer.password

    }
   
  this.customerService.addCustomer(customer).subscribe(
    (repsonse) => {
      console.log(repsonse);
      this.allCustomer = repsonse;
      //this.router.navigate(["/customer-login"]);
      this.successMsg = this.successMsg + "Congrulations you have successfully registered. Your Customer Id is :"+this.allCustomer.customerId;
    }
  );
  }
}
