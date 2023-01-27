import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnDestroy,OnChanges,
DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {
  @Input() parent:any;
  @ContentChild('content',{static:true})content:any;
  @ViewChild('view',{static:true})viewdata:any;

  constructor() { 
    console.log("this is child Constructor");
    
  }
  ngAfterViewChecked(): void {
    console.log("This Is Child ngAfterViewChecked",this.viewdata);
  }
  ngAfterViewInit(): void {
    console.log("This Is Child ngAfterViewInit",this.viewdata);
  }

  // count:number=0;
  // timmer:any;

  ngOnInit(): void {
    console.log("this is child ngOnInit" ,this.content,this.viewdata);

    // this.timmer= setInterval(()=>{
    //   this.count=this.count+1;
    //   console.log(this.count);
      
    // },1000)
  }

  ngOnDestroy(): void {
    console.log("this is child ngOnDestroy");
    // clearInterval(this.timmer)
  }
  ngAfterContentChecked(): void {
    console.log("This Is Child ngAfterContentChecked" ,this.content);
  }

 

  ngDoCheck(): void {
    console.log("This Is Child DoCheck" ,this.content,this.viewdata);
  }
  
  ngAfterContentInit(): void {
    console.log("This Is Child ngAfterContentInit",this.content);
    
  }

  ngOnChanges(abc:SimpleChanges): void {    
    console.log("This Is Child OnChanges" ,this.content,this.viewdata);
  }

}
