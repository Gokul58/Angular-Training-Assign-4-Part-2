import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class BoxDirective implements OnInit {

  @Input() defaultColor : string = "transparent";
  @Input() hoverColor : string = "transparent";


  constructor(private elementRef: ElementRef) {}

  @HostBinding('style.backgroundColor') backgroundColor : string = "transparent";
  @HostBinding('style.transform') transform = '';

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.boxShadow') boxShadow = '';

  @HostListener('mouseover') onHover() {
    this.boxShadow = '10px 10px 10px 10px';
    this.backgroundColor = this.hoverColor;
    this.transform = 'Scale(1.5)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.boxShadow = '0px 0px 0px 0px';
    this.backgroundColor = this.defaultColor;
    this.transform = 'Scale(1.0)';
  }
}