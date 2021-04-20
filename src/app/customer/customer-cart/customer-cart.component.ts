import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent implements OnInit {

  @Input() count=0;
  @Output() countChange= new EventEmitter();
  allCarts: any =[];

  queryParam : number = 0;
   
  grandTotal : number = 0;

  totalCost : number = 0;

  order : Array<any> = [];

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.queryParam = parseInt(params['val']);
      
      console.log(this.queryParam);
    });

    //this.http.get("http://localhost:8086/onlineshopping/api/cart", cart");

    this.http.get("http://localhost:8086/onlineshopping/api/cart/"+this.queryParam).subscribe(
      (response) => {
        this.allCarts = response;
        console.log(response);
      }
    );
     
   
    
  }

 calculateTotalCost(){
    for (let i=0;i<this.allCarts.length;i++){
      this.totalCost = this.totalCost + this.allCarts[i].productCart.price;
    // console.log(this.allCarts[i].productCart.price);
    }
    this.grandTotal = 100 + this.totalCost;

    console.log(this.totalCost);
    console.log(this.grandTotal);
    
  }



deleteCart(cartId: any){
  this.http.delete("http://localhost:8086/onlineshopping/api/cart/"+cartId).subscribe(
      (response)=>{
        this.allCarts = response;
      }
    );
     console.log(cartId);
}

descCount()
 
{​​​​​​​
  this.count=this.count-1;
  this.countChange.emit(this.count);
}​​​​​​​


incCount()

{​​​​​​​
  this.count=this.count+1;
  this.countChange.emit(this.count);
}​​​​​​​

makeOrder(){
  for(let i=0; i<this.allCarts.length; i++){
    this.order[i] = {
      customerOrder:{
        customerId: this.allCarts[i].customerCart.customerId
      },
      productOrder:{
          productId : this.allCarts[i].productCart.productId
      }
    }

  }
  console.log(this.order);
  this.http.post("http://localhost:8086/onlineshopping/api/order",this.order).subscribe(
    (response)=> {
     console.log(response);
    // this.router.navigate(['/order-cart']); //{ queryParams:  this.allCarts });
    sessionStorage.setItem('cartData',JSON.stringify(this.allCarts));
    

    this.router.navigate(['/customer-order'], { queryParams: { val: this.queryParam }});
    }
  );
   
}
 
goToProduct(){
  this.router.navigate(['/customer-product'], { queryParams: { val: this.queryParam }}); 
}

goToProfile(){
  this.router.navigate(['/customer-profile'], { queryParams: { val: this.queryParam }});
}
}​​​​​​​

 

