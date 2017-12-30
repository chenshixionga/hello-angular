import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUless]'
})
export class ConstructionDirective {
  private hasView:boolean=false
  constructor(private templateRef:TemplateRef<any>,
               private viewContainer:ViewContainerRef) { }
   
  @Input() set appUless(condition:boolean){
    if(!condition && !this.hasView){
       this.viewContainer.createEmbeddedView(this.templateRef)
       this.hasView = true
    }else{
      this.viewContainer.clear()
      this.hasView = false
    }
  }             

}
