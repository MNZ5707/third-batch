import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  constructor() { }

  Array=["Apple","Orange","Grape"]

  fruits="Apple";

  loop(i:any){
    this.fruits=i;
  }



  ngOnInit(): void {
  }

}
