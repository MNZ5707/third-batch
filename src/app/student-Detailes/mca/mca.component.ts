import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-mca',
  templateUrl: './mca.component.html',
  styleUrls: ['./mca.component.css']
})
export class McaComponent implements OnInit {

  constructor(public mcaservice:StudentService) { }

  ngOnInit(): void {
  }
  mcaData=this.mcaservice.getData()

}
