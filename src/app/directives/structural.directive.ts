import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {

  @Input() set appStructural(condition:any){
    if(condition){
      this.viewTemplate.createEmbeddedView(this.tempRef);
    } else {
      this.viewTemplate.clear();
    }
  }

  constructor(private tempRef : TemplateRef<any>, private viewTemplate : ViewContainerRef) { }

}
