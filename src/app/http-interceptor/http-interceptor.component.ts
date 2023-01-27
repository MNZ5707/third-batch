import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.css']
})
export class HttpInterceptorComponent implements OnInit {

  constructor( public service:ApiService) { }

  data:any=[]

  ngOnInit(): void {
    this.service.getdata().subscribe((res)=>{
      console.log(res);
      
    })
  }

}
