import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  val=10;
  ngOnInit(): void {
   
  }

  


  condition=false

  work(){
    this.condition=true;
    setTimeout(() => {
      this.condition=false;
    }, 5000);
  }

}
