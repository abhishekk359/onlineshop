import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productData: any;
  @Output() deleteEventEmitter: EventEmitter<any> = new EventEmitter();
  @Output() editEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
  
  editEvent(productId: any){
    this.editEventEmitter.emit(productId);

  }
 
  deleteEvent(productId: any){
    console.log(productId);
    this.deleteEventEmitter.emit(productId);
  }

}
