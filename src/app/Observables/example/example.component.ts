import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let prom= new Promise((resolve,reject)=>{
      // console.log("promise");
      
      resolve('Promise Calling');
      // reject('Promise calling Reject');
      resolve('Promise Calling3');
    })

    prom.then(result=>console.log(result)).catch(result=>console.log(result));
    

    let observe=new Observable(abc=>{
      // console.log("observe");
      abc.next('Observable Calling')
      abc.next('Observable Calling2')
      abc.next('Observable Calling3')
    })

    observe.subscribe((res)=>console.log(res))

  }

}
