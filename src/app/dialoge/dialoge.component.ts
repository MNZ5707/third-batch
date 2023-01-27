import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogeOpenComponent } from '../dialoge-open/dialoge-open.component';

@Component({
  selector: 'app-dialoge',
  templateUrl: './dialoge.component.html',
  styleUrls: ['./dialoge.component.css']
})
export class DialogeComponent {
  constructor(public dialoge:MatDialog){}

  // id=1;
  // abc(id:any){
  //   this.id=id
  // }
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

  status=""

  openDialog(id:any){
   let a= this.dialoge.open(DialogeOpenComponent,{data:id })
   a.afterClosed().subscribe((res)=>{
    if(res=='logout'){
      console.log("this is for logout");

      this.status="logout";
      
    }else{
      console.log("this is for close");
      this.status="close";
    }
   })
  }
}
