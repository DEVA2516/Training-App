import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers(){
    return this.httpClient.get("http://localhost:3001/sql");
  }

  createUser(data:object){
    //console.log(users);
    return this.httpClient.post("http://localhost:3001/postData",data)
  }

  getUserById(id:number){
    return this.httpClient.get("http://localhost:3001/getById/id="+id)
  }
}
