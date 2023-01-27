import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  constructor(public fb:FormBuilder){}

  UserData=this.fb.group({

    'Name':new FormGroup({
      'fname':new FormControl("",Validators.required),
    'lname':new FormControl("",Validators.required),
    }),
    
    'age':new FormControl(null ,Validators.required),
    'phone':new FormControl(null,[Validators.required,Validators.pattern('[6-9]{1}[0-9]{9}')]),
    'email':new FormControl("",[Validators.required,Validators.email]),
    'password':new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),

  })

    get FormControls(){
     return this.UserData.controls ;
    }
    formdata(data:any){
      console.log(data);
      
    }



  // loadValue(){
  //   this.UserData.patchValue({
  //     fname:"Mnz",
  //     lname:"62",
  //     email:"mnz@gmail.com",
  //     password:"123456789",
  //   })

  // }
  

}
