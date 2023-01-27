import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Data=[
    {
      id:1,
      name:"Ali",
      dept:"MCA"
    },
    {
      id:2,
      name:"Athul",
      dept:"MSC"
    },
    {
      id:3,
      name:"Basim",
      dept:"MCA"
    },
    {
      id:4,
      name:"Marjan",
      dept:"MSC"
    },
  ]

}
