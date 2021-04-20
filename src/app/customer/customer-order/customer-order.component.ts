import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {

  allOrders: any = [];

  order: any;

  grandTotal: number = 0;

  totalCost: number = 0;

  queryParam : number = 0;
  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.queryParam = parseInt(params['val']);
      
      console.log(this.queryParam);
    });

    //this.http.get("http://localhost:8086/onlineshopping/api/cart", cart");

    
    /*this.route.queryParams.subscribe(
      params => {
        
        console.log(Object.values(params.allCarts));
      
      }
    
    );*/
    //console.log(this.allOrders[0].orderId);
    
    this.order=sessionStorage.getItem('cartData');
    console.log(this.order);
    this.allOrders = JSON.parse(this.order);
    console.log(this.allOrders);

    for(let i=0; i<this.allOrders.length; i++){
      this.totalCost = this.totalCost + parseInt(this.allOrders[i].productCart.price);
    }
    this.grandTotal = this.totalCost + 100;


  }
  goToProduct(){
    this.router.navigate(['/customer-product'], { queryParams: { val: this.queryParam }}); 
  }

  myCart(){
    this.router.navigate(['/customer-cart'], { queryParams: { val: this.queryParam }});
  }

  goToProfile(){
    this.router.navigate(['/customer-profile'], { queryParams: { val: this.queryParam }});
  }
  }

