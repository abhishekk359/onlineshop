import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/admin/product/product.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-product',
  templateUrl: './customer-product.component.html',
  styleUrls: ['./customer-product.component.css']
})
export class CustomerProductComponent implements OnInit {

 
  allProducts: any = [];
  customer = {customerId:0};
  product = {productId:0};
  allCarts: any =[];

  constructor(private productService: ProductService, private route: Router, private router: ActivatedRoute, private customerService: CustomerService,
    private http: HttpClient) { }

  queryParam: number= 0;


  ngOnInit(): void {

    this.router.queryParams.subscribe(params => {
      this.queryParam = parseInt(params['val']);
      
      console.log(this.queryParam);
    });
   
    this.productService.getAllProducts().subscribe(
      (response) => {
        console.log(response);
        this.allProducts=response;
      }
    );

   /* this.http.get("http://localhost:8086/onlineshopping/api/cart/"+this.queryParam).subscribe(
      (response) => {
        this.allCarts = response;
        console.log(response);
      }
    );*/

  }

  customerId = this.queryParam ;

  gotoProfile(){
    this.route.navigate(['/customer-profile'], { queryParams: { val: this.queryParam }});
  }

  addToCart(prodId: any){
    let cart = {
      cartId: 0,
     // customerId: this.queryParam,

     customerCart:{customerId: this.queryParam},
     // productId : prodId
     productCart: {productId:prodId}
    }
    console.log(cart);
    this.customerService.addCart(cart).subscribe(
           (response)=>{
                console.log(response);

              this.allCarts = response;
           }
    );
    this.route.navigate(['/customer-cart'], { queryParams: { val: this.queryParam }});
    
  }

  myCart(){
    this.route.navigate(['/customer-cart'], { queryParams: { val: this.queryParam }});
  }



}
