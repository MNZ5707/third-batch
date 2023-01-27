import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }
  abc="hello "
  ngOnInit(): void {
  }

  value=0
  content="How Are You";

  fun1(){
    this.content="good morning"
  }

  incri(){
    this.value++
  }
  decri(){
    this.value--
  }


}
