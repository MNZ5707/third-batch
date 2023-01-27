import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }
  abc="hi";
  condition=false;
  change(){
    this.condition=!this.condition
  }

  ngOnInit(): void {
  }

}
