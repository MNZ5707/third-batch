import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detailes',
  templateUrl: './employee-detailes.component.html',
  styleUrls: ['./employee-detailes.component.css']
})
export class EmployeeDetailesComponent implements OnInit {

  constructor(public active:ActivatedRoute ,public route:Router) { }
  data=[{
    id:1,
    name:"Athul",
    salary:20000
  },
  {
    id:2,
    name:"Adhish",
    salary:30000
  },
  {
    id:3,
    name:"Marjan",
    salary:35000
  },
  {
    id:4,
    name:"Basim",
    salary:18000
  }]

  activeid:any;
  activeData:any;
  name:any;

  ngOnInit(): void {

    
    // this.activeid= this.active.snapshot.paramMap.get('id');
    this.active.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.activeid=id;
      this.activeData=this.data.find((value:any)=>value.id==this.activeid);
    console.log(this.activeData);
    })
    
   
  }

  pre(){
    let id=this.activeid - 1;
    this.route.navigate([`/emp/${id}`])
  }

  next(){
    let id=parseInt(this.activeid) + 1;
    this.route.navigate([`/emp/${id}`])
  }

  goBack(name:any){
    
    this.route.navigate(['/emp',{id:this.activeid,name:name}])
    // this.route.navigate(['../',{id:this.activeid,name:name}],{relativeTo:this.active})
  }



}
