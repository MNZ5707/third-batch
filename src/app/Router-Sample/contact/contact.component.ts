import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( public route:Router) { }

  ngOnInit(): void {
  }

  navigat(a:any){
    this.route.navigate([`/${a}`])
  }

}
