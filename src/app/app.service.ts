import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers(){
    return this.httpClient.get( environment.apiUrl+"/sql");
  }

  createUser(data:object){
    //console.log(users);
    return this.httpClient.post(environment.apiUrl+"/postData",data)
  }

  getUserById(id:number){
    return this.httpClient.get(environment.apiUrl+"/getById?id="+id)
  }
 
  updateUser(data:object){
    return this.httpClient.put(environment.apiUrl+`/updatebyid`,data)
  }

  deleteUser(userId:number){
    return this.httpClient.delete(environment.apiUrl+`/deletebyid?id=${userId}`)
  }

}
