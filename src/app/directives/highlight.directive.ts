import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor : string = "pink";
  @Input() hoverColor : string = "red";


  constructor(private elementRef : ElementRef,private renderer : Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor : string = "pink";  // an alternative for the renderer

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = "yellow";
    // this.renderer.setStyle(this.elementRef.nativeElement,"background-color","pink")
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(){
    // this.renderer.setStyle(this.elementRef.nativeElement,"background-color","orange")
    this.backgroundColor = 'orange';
  }
  @HostListener('mouseleave') mouseLeave(){
    // this.renderer.setStyle(this.elementRef.nativeElement,"background-color","yellow")
    this.backgroundColor = this.hoverColor;
  }

}


