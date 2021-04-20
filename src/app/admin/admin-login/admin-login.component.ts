import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from './Admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin={
    empId:'',
    password:''
  }
  errorMsg:any="";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.errorMsg="";
  }
  onSubmit(adminForm: any){
    if(adminForm.empId==="777-888-999" && adminForm.password==="123456"){
      this.router.navigate(["/admin-product-list"]);
      console.log("Login succesfull");
    }
    else{
      this.errorMsg="Invalid Employee Id/ password";
      console.log("Login not succesfull");
    }
  }
}
