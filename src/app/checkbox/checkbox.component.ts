import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  check=[{
    checked:false,
    name:"Cricket",
  },
  {
    checked:true,
    name:"FootBall",
  },
  {
    checked:false,
    name:"Hokey",
  }]

  abc:any;

  SelectAll(event:any){
    console.log(event);
    if(event.checked){
      this.check=this.check.map((value)=>{
        value.checked=true;
        return value
      })
      
    }else{
      this.check=this.check.map((value)=>{
        value.checked=false;
        return value
      })
    }
    
  }

}
