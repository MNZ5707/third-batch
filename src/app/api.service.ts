import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  getdata(){
    return this.http.get("https://b2b.akbarumrah.com/apis/hotels/request/");
  }
  
}
