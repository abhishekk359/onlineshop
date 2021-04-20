import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  allCustomer: any=[];
  
  constructor(private http: HttpClient) { }

  getAllCustomer(){
    return this.http.get("http://localhost:8086/onlineshopping/api/customer");

  }

  addCustomer(customer: any){
    console.log(customer);
    return this.http.post("http://localhost:8086/onlineshopping/api/customer", customer);
  }

  getAllProducts(){
    //return this.allProducts;
    return this.http.get("http://localhost:8086/onlineshopping/api/product");
  }
  getCustomerById(customerId: any){
    
    return this.http.get("http://localhost:8086/onlineshopping/api/customer/"+customerId);
  }

  addCart(cart : any){
    return this.http.post("http://localhost:8086/onlineshopping/api/cart", cart);
  }

  
}
