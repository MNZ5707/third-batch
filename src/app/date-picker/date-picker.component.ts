import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {


  dateFilter=(date:any)=>{
    let day=date.getDay();
    return day!=0 && day!=6
  }
}
