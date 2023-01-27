import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-get',
  templateUrl: './subject-get.component.html',
  styleUrls: ['./subject-get.component.css']
})
export class SubjectGetComponent implements OnInit,OnDestroy {

  constructor(public subservice:SubjectService) { }
  message:any;

  sub:Subscription | undefined;

  ngOnInit(): void {
    this.sub= this.subservice.reciveData().subscribe((res)=>{
      this.message=res;
      console.log(this.message);
      
    })

  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

}
