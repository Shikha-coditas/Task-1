import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { HttpService } from '../http.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ThisReceiver } from '@angular/compiler';



export interface Users {
  id: number,
  login: string
  
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Users[] = [];
  dataSource!: MatTableDataSource<any>;
  username: any;
  url: any;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public router : Router, public http : HttpService) { 
    
    
  }
  

  ngOnInit(){
    this.http.getUsers().subscribe(res => {
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      console.log(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


 }
 )
  }
  displayedColumns = ['id','login'];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayData(row: any)
  {
   // console.log(row.login);
    this.username = row.login;
    this.url = this.username;
    this.router.navigateByUrl(this.url);
  }
  
}
