import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {


  allProducts: any = [];

  showAddForm: boolean = false;
  showAddFormCategory: boolean =false;
  productName: any;
  price: any;
  color:any;
  dimension: any;
  specification: any;
  productImage: any;
  category =  {catId:0};
  manufacturer:any;

  categoryName: any;

  cat:any;

  data: any;

  constructor(private productService: ProductService, private router: Router,
    private http: HttpClient) { }


  ngOnInit(): void {


  this.productService.getAllProducts().subscribe(
    (response) => {
      console.log(response);
      this.allProducts=response;
    }
  );
  
    this.http.get("http://localhost:8086/onlineshopping/api/category").subscribe(Response=>{
        console.log(Response);
        this.data=Response;
        //this.cat=Response;
        //this.categoryList=this.cat.list;
      });
    
  }

  toggleAdd(){
   
    this.productName = '';
    this.price = '';
    this.color = '';
    this.dimension =''
    this.specification = '';
    this.productImage = '';
    this.category.catId = 0;
    this.manufacturer='';
    this.showAddForm = !this.showAddForm;
  }

  toggleAddCategory(){
   this.categoryName='';
    this.showAddFormCategory = !this.showAddFormCategory;
  }
 
addCategory(){
 let category = {
   catId : 0,
   categoryName: this.categoryName
 }
 this.http.post("http://localhost:8086/onlineshopping/api/category", category).subscribe(Response=>{
        console.log(Response);
        this.data=Response;
        //this.cat=Response;
        //this.categoryList=this.cat.list;
      });
}



  addProduct(){
    let product = {
      productId: 0,
      productName: this.productName,
      price: this.price,
      color: this.color,
      dimension: this.dimension,
      specification: this.specification,
      productImage: this.productImage,
      manufacturer:this.manufacturer,
      //catId:this.category.catId
     category: {catId:this.category.catId}
    }
console.log(product);
  //this.allProducts = this.productService.addProduct(product);
   /*this.productName = '';
    this.price = '';
    this.color = '';
    this.dimension = '';
    this.specification = '';
    this.productimg = '';
    this.manufacturer='';
    this.catId='';*/
    
    this.productService.addProduct(product).subscribe(
      (repsonse) => {
        this.allProducts = repsonse;
      }
    );
  }

  deleteEventParent($event: any){
    console.log($event);
    //this.allProducts = this.productService.deleteProduct($event);
    this.productService.deleteProduct($event).subscribe(
      (repsonse) => {
        this.allProducts = repsonse;
      }
    );
  }

  editEventParent($event: any){
    console.log($event);
    this.router.navigate(['/edit-product', $event]);
  }
}

