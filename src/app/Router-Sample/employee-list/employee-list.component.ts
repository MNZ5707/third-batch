import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  constructor( public route:Router,public active:ActivatedRoute) { }
  optionalid:any
  ngOnInit(): void {

    this.active.paramMap.subscribe((param:ParamMap)=>{
      this.optionalid=param.get('id');
    })
  }
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

  viewList(a:any){
    // this.route.navigate([`/emp/${a}`])
    this.route.navigate([a],{relativeTo:this.active})
  }

  select(datas:any){
    return datas==this.optionalid
  }

  // cond=true

  // abc(a:any){
  //   console.log(a)
  // }

}
