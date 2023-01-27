import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'study_project';

  Data="";
  Data2="";
  print="";

  hello="";


  show(){
    this.print=this.Data;
    this.hello=this.Data2;
  }

  abc(a:any){
    alert("hello world "+a )
  }
}
