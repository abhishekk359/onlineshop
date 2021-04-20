import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allProducts : any= [];
/*
  allProducts = [
    {
      productId: 101,
      productName: 'AC',
      price: '35000',
      color: 'white',
      dimension:'35*24',
      specification: '1 Ton, 3 stars',
      productimg:'https://www.whirlpoolindia.com/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/w/h/whirlpool_supreme_cool_angle-right_3.jpg',
      catId:'null'
    },
    {
      productId: 102,
      productName: 'Tv',
      price: '25000',
      color: 'Black',
      dimension:'25*24',
      specification: '55inch Lcd',
      productimg:'https://global.appmifile.com/webfile/globalimg/in/cms/A7442D32-F379-BD0A-4B22-A262258E2756.jpg',
      catId:'null'
    },
    {
      productId: 103,
      productName: 'Fridge',
      price: '15000',
      color: 'Red',
      dimension:'45*24',
      specification: 'single door 255L',
      productimg:'https://images-na.ssl-images-amazon.com/images/I/71O31clz6mL._SL1500_.jpg',
      catId:'null'
    }
  ];
  */
  constructor(private http: HttpClient) { }

  getAllProducts(){
    //return this.allProducts;
    return this.http.get("http://localhost:8086/onlineshopping/api/product");
  }

  addProduct(product: any){
    
    /*let newProdId = this.allProducts[this.allProducts.length - 1].productId + 1;
    console.log("newProdId: " + newProdId);
    product.productId = newProdId;
    this.allProducts.push(product);
    return this.allProducts;  
   console.log(product);
   */

  /* return this.http.post("http://localhost:8085/onlineshopping/api/product" , product).subscribe(
      (Response) => {
        console.log(Response);
        this.allProducts=Response;
      });
*/
     console.log(product);
    return this.http.post("http://localhost:8086/onlineshopping/api/product", product);
  }

  deleteProduct(id: any){
   
    /* for(let i=0; i<this.allProducts.length; i++){
       if(this.allProducts[i].productId == id){
         this.allProducts.splice(i,1);
         break;
       }
     }
     return this.allProducts;
     */
     return this.http.delete("http://localhost:8086/onlineshopping/api/product/"+id);
    }

    updateProduct(product: any){
      /* for (let i=0; i<this.allProducts.length; i++){
         if(this.allProducts[i].productId == product.productId){
          this.allProducts[i].productName = product.productName;
          this.allProducts[i].price = product.price;
          this.allProducts[i].color = product.color;
          this.allProducts[i].dimension = product.dimension;
          this.allProducts[i].specification = product.specification;
          this.allProducts[i].productImage = product.productImage;
           break;
       }
       }*/
       return this.http.put("http://localhost:8086/onlineshopping/api/product", product);
      }

      getProduct(productId: any){
      /*  let product;
        for (let i=0; i<this.allProducts.length; i++){
          if(this.allProducts[i].productId == productId){
          product = this.allProducts[i];
          break;
        }
       }
       return product;
      }*/
      return this.http.get("http://localhost:8086/onlineshopping/api/product/"+productId);
    }
}
