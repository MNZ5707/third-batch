import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-msc',
  templateUrl: './msc.component.html',
  styleUrls: ['./msc.component.css']
})
export class MscComponent implements OnInit {

  constructor(public service:StudentService) { }

  ngOnInit(): void {
  }
  stddata=this.service.getData()
}
