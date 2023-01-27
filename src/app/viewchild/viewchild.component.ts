import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
  @ViewChild('inp') inputRef:any;
  @ViewChild('btn') button:any;
  constructor() { }
  abc(){
  console.log(this.inputRef)
  console.log(this.button);
  console.log(this.inputRef.nativeElement.value)
  
  // console.log(this.inp.nativeElement.value)
  this.inputRef.nativeElement.value="abc";
  this.inputRef.nativeElement.style.color="red"
  }

  ngOnInit(): void {
  }

}
