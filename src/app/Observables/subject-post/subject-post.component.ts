import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-post',
  templateUrl: './subject-post.component.html',
  styleUrls: ['./subject-post.component.css']
})
export class SubjectPostComponent implements OnInit {

  constructor(public subjectservice:SubjectService) { }

  ngOnInit(): void {
  }

  data=["hello","hi"]


  abc(data:string){
    this.subjectservice.sentData(this.data); 
    console.log(data);
    
  }


}
