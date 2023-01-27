import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  Data=[
    {
      id:1,
      name:"Ali",
      dept:"MCA",
      status:"fail",
    },
    {
      id:2,
      name:"Athul",
      dept:"MSC",
      status:"pass",
    },
    {
      id:3,
      name:"Basim",
      dept:"MCA",
      status:"fail",
    },
    {
      id:4,
      name:"Marjan",
      dept:"MSC",
      status:"pass",
    },
    {
      id:5,
      name:"Thasneem",
      dept:"MCA",
      status:"fail",
    },
    {
      id:6,
      name:"Thasneem",
      dept:"MSC",
      status:"pass",
    },
    {
      id:7,
      name:"Thasneem",
      dept:"MCA",
      status:"pass",
    },
    {
      id:8,
      name:"Thasneem",
      dept:"MSC",
      status:"fail",
    },
  ]


  getData(){
    return this.Data
  }
}
