import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }
  abc="this is for value"
  dis=false;
  a="number";
  ngOnInit(): void {
  }
  disable(){
    this.dis=!this.dis
  }

}
