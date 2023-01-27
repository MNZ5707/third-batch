import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,DoCheck {

  constructor() { 
    console.log("this is Parent Constructor");
    
  }

  ngOnInit(): void {
    console.log("this is Parent ngOnInit");
  }

  open:boolean=false;
  Abc=""

  toggle(){
    this.open=!this.open
  }
  ngDoCheck(): void {
    console.log("This Is Parent DoCheck");
  }

}
