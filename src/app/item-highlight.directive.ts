import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appItemHighlight]',
  standalone: true,
})
export class ItemHighlightDirective {
  originalClassName!: string;
  constructor(private el: ElementRef) {
    this.originalClassName = this.el.nativeElement.className;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(
      'scale-110 bg-sky-800 transition-all ease-in-out duration-500'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeHighlight();
  }

  private highlight(className: string) {
    this.el.nativeElement.className += ` ${className}`;
  }
  private removeHighlight() {
    this.el.nativeElement.className = this.originalClassName;
  }
}
