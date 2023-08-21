import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers!: HttpHeaders;
  private url = "http://localhost:8080";

  constructor(private htttClient: HttpClient) { 
    this.headers = new HttpHeaders().set('content-type', 'application/json');
  }
  

  products = [
    {id:1, name:"mobile1", description:"mobile1"},
    {id:2, name:"mobile2", description:"mobile2"},
    {id:3, name:"mobile3", description:"mobile3"}
  ];
  getMobiledata(){
    return this.products;
  }

  checkLogin(user:any){
    return this.htttClient.post(this.url + '/users/checkUser/' + user.email,user);
  }

  
}
