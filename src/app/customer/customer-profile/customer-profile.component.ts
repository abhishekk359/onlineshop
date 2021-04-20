import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../Address';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  constructor(private http: HttpClient,  private route: ActivatedRoute, private router:Router ) { }

  addressCustomer: any;
  
  queryParam : any;

  allOrders : any = [];

  customer : any;

  //addressCustomer:any;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.queryParam = parseInt(params['val']);
      
      console.log(this.queryParam);
    });
    
    this.http.get("http://localhost:8086/onlineshopping/api/address/"+this.queryParam).subscribe(
      (response)=>{
        console.log(response);
        this.addressCustomer=response;
      }
    );
       
    this.http.get("http://localhost:8086/onlineshopping/api/customer/"+this.queryParam).subscribe(
      (response)=>{
        console.log(response);
        this.customer=response;
      }
    );
  }
  
  address : Address = {
    addressId: 0,
    streetNo: '',
    buildingName:'',
    city:'',
    state:'',
    country:'',
    pincode:'',
    customerAdd:{
        customerId:0
    }
  }


  addCustomerAddress(addAddress: NgForm){
    let address = {
      //addressId: this.addressCustomer.addressId,
      addressId: 0,
      streetNo: this.address.streetNo,
      buildingName: this.address.buildingName,
      city: this.address.city,
      state: this.address.state,
      country: this.address.country,
      pincode: this.address.pincode,
      customerAdd: {customerId:this.queryParam}

    }
    console.log(addAddress);

   /* this.http.post("http://localhost:8086/onlineshopping/api/address",address).subscribe(
      (response) => {
           this.addressCustomer=response;
           console.log(response);
      } 
    );
    */


  }

  orderHistory(){
      this.http.get("http://localhost:8086/onlineshopping/api/order/"+this.queryParam).subscribe(
        (response) => {
           console.log(response);
           this.allOrders = response;
        }
      );
  }

  goToProduct(){
    this.router.navigate(['/customer-product'], { queryParams: { val: this.queryParam }}); 
  }

  myCart(){
    this.router.navigate(['/customer-cart'], { queryParams: { val: this.queryParam }});
  }


  editAddress(){
    let address = {
      addressId: this.addressCustomer.addressId,
     // addressId: 0,
      streetNo: this.addressCustomer.streetNo,
      buildingName: this.addressCustomer.buildingName,
      city: this.addressCustomer.city,
      state: this.addressCustomer.state,
      country: this.addressCustomer.country,
      pincode: this.addressCustomer.pincode,
      customerAdd: {customerId:this.queryParam}

    }
    this.http.put("http://localhost:8086/onlineshopping/api/address",address).subscribe(
      (response)=>{
        this.addressCustomer = response;
      }
    )
  }
  
}

  /*constructor(private http: HttpClient,  private route: ActivatedRoute) { }
  
  addressCustomer: any;
  
  queryParam : number = 0;

  address : Address = {
    addressId: 0,
    streetNo: '',
    buildingName:'',
    city:'',
    state:'',
    country:'',
    pincode:'',
    customerAdd:{
        customerId:0
    }
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.queryParam = parseInt(params['val']);
      
      console.log(this.queryParam);
    });
    this.http.get("http://localhost:8086/onlineshopping/api/address/"+this.queryParam).subscribe(
      (response)=>{
        console.log(response);
        this.addressCustomer=response;
      }
    )
  }

  addAddress(){
    let address = {
      addressId: this.addressCustomer.addressId,
      streetNo: this.address.streetNo,
      buildingName: this.address.buildingName,
      city: this.address.city,
      state: this.address.state,
      country: this.address.country,
      pincode: this.address.pincode,
      customerAdd: {customerId:this.queryParam}
    }
    this.http.post("http://localhost:8086/onlineshopping/api/address",address).subscribe(
      (response) => {
           this.addressCustomer=response;
           console.log(response);
      } 
    );
  }

*/


