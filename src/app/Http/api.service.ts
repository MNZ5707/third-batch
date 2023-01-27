import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  url="https://jsonplaceholder.typicode.com/users";
  jsonUrl="http://localhost:3000/user";
  extra="https://b2b.akbarumrah.com/apis/hotels/request"
  getD(){
   return this.http.get(this.url);
  }
  // pdata=userform.value

  postD(pdata:any){
    return this.http.post(this.jsonUrl,pdata)
  }
  getData2(){
    return this.http.get(this.jsonUrl)
  }
  delet(id:any){
    return this.http.delete(`http://localhost:3000/user/${id}`)
  }

  getextra(){
  return  this.http.get(this.extra)
  }
  

}
