import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name="Hello World";
  con="good morning how are you";

  obj={
    id:1,
    name:"Ali",
    dept:"MCA",
  }

  upper(){
    return this.name.toUpperCase()
  }
  ab:any;

  date=new Date()

}
