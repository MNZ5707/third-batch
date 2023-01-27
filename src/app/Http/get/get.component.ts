import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor( public service:ApiService, public http:HttpClient) { }

  Data:any=[]
  
  ngOnInit(): void {
  this.service.getD().subscribe((result)=>{
    console.log(result)
    this.Data=result;
  })

  this.service.getextra().subscribe((res)=>{
    console.log(res)
  })
  }

  abc(){
    this.http.get("http://localhost:3000/user").subscribe((res)=>{
      console.log(res)
    })
  }

}
