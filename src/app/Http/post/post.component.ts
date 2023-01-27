import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public service:ApiService) {
    // console.log("hello world")

   }

  ngOnInit(): void {
    // console.log("good morning");
  }
  // data=userform.value
  postData(data:any){
    console.log(data);
    
    this.service.postD(data).subscribe((res)=>{
      console.log(res)
    })
  }


}
