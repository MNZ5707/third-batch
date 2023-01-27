import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  constructor(public element:ElementRef ,public render:Renderer2) { }

 @HostListener('click')abc(){
  this.render.setStyle(this.element.nativeElement,'margin','30px 30px')
  this.render.setStyle(this.element.nativeElement,'transition','1s')
}
@HostListener('mouseleave')hello(){
  this.render.setStyle(this.element.nativeElement,'margin','0px 0px')
  this.render.setStyle(this.element.nativeElement,'transition','1s')
}
}


