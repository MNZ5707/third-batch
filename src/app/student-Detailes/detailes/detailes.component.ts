import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.css']
})
export class DetailesComponent implements OnInit {

  constructor(public ser:StudentService) { }
  StudentDetailes:any;
  ngOnInit(): void {
    this.StudentDetailes=this.ser.getData()
  }
  
  

  

}



