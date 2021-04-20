import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  
  @Input() productData : any;
  productId: any;
  productName: any;
  price: any;
  color : any;
  dimension: any;
  specification : any;
  productImage : any;
  category =  {catId:0};
  manufacturer:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {

   // this.productId = this.activatedRoute.snapshot.paramMap.get('prodId');
    this.productId = this.activatedRoute.snapshot.paramMap.get('prodId');

    //let product = this.productService.getProduct(this.productId);
      this.productService.getProduct(this.productId).subscribe(
      (response: any) => {
        console.log(response);
        this.productName=response.productName;
        this.price=response.price;
        this.color=response.color;
        this.dimension=response.dimension;
        this.specification=response.specification;
        this.manufacturer=response.manufacturer;
        this.productImage=response.productImage;
        this.category=response.category;
        console.log("catId");
        console.log(response.category.catId);
        
      }
    );
   /* let product = this.productService.getProduct(this.productId);
    this.productName = product?.productName;
    this.price = product?.price;
    this.color = product?.color;
    this.dimension = product?.dimension;
    this.specification = product?.specification;
    this.productimg = product?.productimg;
    this.manufacturer = product?.manufacturer;
    this.catId = product?.catId;
*/
  }
  editForm(){
    //1. update the product by contacting the service layer
    let product = {
      productId: this.productId,
      productName: this.productName,
      price: this.price,
      color: this.color,
      dimension: this.dimension,
      specification:this.specification,
      productImage:this.productImage,
      manufacturer:this.manufacturer,
     // catId: this.catId
     category: {catId:this.category.catId}


    }
   //this.productService.updateProduct(product);

    //2. navigate to list product component.
   // this.router.navigate(['/product']);
   this.productService.updateProduct(product).subscribe(
    (response) => {
          this.router.navigate(['/product']);

    }
  );

  }
}

