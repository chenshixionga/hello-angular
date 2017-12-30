import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appLightHight]'
})
export class AppLightHightDirective {

  constructor(private el:ElementRef) {
  }

  @Input('appLightHight') highLightColor:string

  @HostListener('mouseleave') mouseLeave(){
    this.hightLight(this.highLightColor)
}

 @HostListener('mouseenter') mouseEnter(){
    this.hightLight('yellow')
 }
  private hightLight(color:string){
    this.el.nativeElement.style.backgroundColor = color
  }
}
