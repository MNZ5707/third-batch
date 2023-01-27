import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialoge-open',
  templateUrl: './dialoge-open.component.html',
  styleUrls: ['./dialoge-open.component.css']
})
export class DialogeOpenComponent implements OnInit  {


  constructor(@Inject(MAT_DIALOG_DATA) public ids:any){}

  dialogData:any;
  ngOnInit(): void {
    this.dialogData=this.data.find((value:any)=>value.id==this.ids)
  }

  data=[{
    id:1,
    name:"Ali"
  },
  {
    id:2,
    name:"Athul"
  },
  {
    id:3,
    name:"Adish"
  },{
    id:4,
    name:"Thsneem"
  },{
    id:5,
    name:"Amal Raj"
  }]

 

  
  


}
