import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface StudentData{
  id:number;
  name:string;
  age:number;
  department:string
}

let Student:StudentData[]=[
  {id:1,name:"Ali",age:25,department:"MCA"},
  {id:2,name:"Athul",age:24,department:"MSC"},
  {id:3,name:"Basim",age:25,department:"MCA"},
  {id:4,name:"Shanid",age:24,department:"MSC"},
  {id:5,name:"Niyas",age:25,department:"MCA"}
]


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  ngOnInit(): void {
    if(window.innerWidth<=this.width){
      console.log("hello world")
    }
  }

  width=700;
  

  TableColumn:string[]=['id','name','age','department',];
  data= new MatTableDataSource(Student)  ;

  abc(data:any){
    console.log(data);
    
  }
  filter(filtervalue:any){
    console.log(filtervalue);
    this.data.filter=filtervalue.trim().toLowerCase()
  }

  
}
