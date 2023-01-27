import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }
  abc="red";

  gre="green"

  condition=false;

  fun(){
    return "35px"
  }

  change(){
    this.abc="green"
  }

  obj={
    color:"red",
    backgroundColor:"green",
    fontSize:"40px"

  }



  ngOnInit(): void {
  }

}
