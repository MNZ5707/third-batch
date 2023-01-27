import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  name="Munees";
  num=25;
  arr=["hello","hi"]
  obj={
    id:1,
    name:"Ali"
  }
  bool=true

  a(){
    return "hello world"
  }

 

  

  ngOnInit(): void {

    console.log(this.name)
  }

}
