import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-get2',
  templateUrl: './get2.component.html',
  styleUrls: ['./get2.component.css']
})
export class Get2Component implements OnInit {

  constructor( public service:ApiService) { }
  data:any=[];
  abc:any;
  ngOnInit(): void {
    this.service.getData2().subscribe((res)=>{
      this.data=res;
      console.log(this.data);

      
    })
  }

  
  deleteData(i:any){ 

    this.data=this.data.filter((value:any)=>{
      return value.id != i;
      
    })
    console.log(this.data);

    // this.service.delet(i).subscribe((res)=>{
    //   console.log(res);
    //   this.ngOnInit()
    // })
  }

}
