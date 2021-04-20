import { Component, OnInit } from '@angular/core';
import { ProductService } from '../admin/product/product.service';

@Component({
  selector: 'app-anonymous-user',
  templateUrl: './anonymous-user.component.html',
  styleUrls: ['./anonymous-user.component.css']
})
export class AnonymousUserComponent implements OnInit {

  allProducts: any = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (response) => {
        console.log(response);
        this.allProducts=response;
      }
    );
  }
}


