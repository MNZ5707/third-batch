import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  subject=new Subject<any>()


  sentData(message:any){
    this.subject.next(message)
  }

  reciveData(){
   return this.subject.asObservable()
  }


}
