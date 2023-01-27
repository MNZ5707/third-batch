import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  UserModel=new User("","Akbar",0,9874563210,"ali@gmail.com","ali123")

  data(user:any){
    console.log(user);
    
  }

}
