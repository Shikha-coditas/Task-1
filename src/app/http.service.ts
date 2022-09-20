import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Users {
  id: number,
  login: string
  
}
 
@Injectable({
  providedIn: 'root'
})
export class HttpService {
data: any;

  constructor(public http : HttpClient) { }
  apiUrl = 'https://api.github.com/users';
  

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.apiUrl);
  }

  getUserDetails(name: string){
     this.http.get(this.apiUrl + '/' + name).subscribe( res => {
         this.data = res;
         console.log(res);
     })
  }
}
