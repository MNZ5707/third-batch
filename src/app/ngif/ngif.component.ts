import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  balance=0;
  condition:Boolean=false;
  

  

  abc(){
    this.condition=!this.condition;
    console.log(this.condition);
  }



}
