import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
username : any;
  constructor(public route : ActivatedRoute, public http : HttpService) { 
  
  }

  ngOnInit(){
    this.route.params.subscribe( res => {
      this.username = res['username'];
      console.log(this.username);
      this.http.getUserDetails(this.username);
    })
  }

}
