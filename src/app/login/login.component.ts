import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data : any
username : any;
password : any;
  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log('clicked');
    //this.router.navigateByUrl('/home');
    this.router.navigate(['/home']);
  }

}
