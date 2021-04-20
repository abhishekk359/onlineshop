import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-customer',
  templateUrl: './navbar-customer.component.html',
  styleUrls: ['./navbar-customer.component.css']
})
export class NavbarCustomerComponent implements OnInit {

 // @Input() id: any;
  queryParam : number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.queryParam = parseInt(params['val']);
      
      console.log(this.queryParam);
    });
  }

}
