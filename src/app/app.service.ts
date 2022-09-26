import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }

  createUser(users:object){
    return this.httpClient.post("http://localhost:3000/posts",users)
  }
}
