import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {

 
  isLoggedin: any=false;
  
  constructor() {​​​​​​​​ 
    this.isLoggedin=false;
  }​​​​​​​​
  ngOnInit(): void {​​​​​​​​
    throw new Error('Method not implemented.');
  }​​​​​​​​
  login():void{​​​​​​​​
    this.isLoggedin=!this.isLoggedin;
  }​​​​​​​​
  

}
