import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.css']
})
export class DropdownComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  open:Boolean=false;
  dropdown1=false;
  dropdown2=false;

  options="";

  abc(name:string){
   this.options=name;
  }
  drop1(){
    this.dropdown1=!this.dropdown1
  }
  drop2(){
    this.dropdown2=!this.dropdown2
  }

}
