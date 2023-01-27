import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Output() event=new EventEmitter();

  constructor() { }
  name="MNZ";

  Parent(){
    this.event.emit(this.name);
  }

  ngOnInit(): void {
  }

}
