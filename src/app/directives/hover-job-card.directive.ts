import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverJobCard]'
})
export class HoverJobCardDirective {

  @HostBinding('class.boxShadow')
  isHover: boolean = false;

  @HostListener('mouseenter')
  mouseOver(eventData: Event) {
    this.isHover = true
  }

  @HostListener('mouseleave')
  mouseOut(eventData: Event) {
    this.isHover = false
  }

}
