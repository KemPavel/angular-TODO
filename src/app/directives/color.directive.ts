import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pkColor]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class ColorDirective {
  @Input('pkColor') color: string = 'green';

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.color); 
  }

   onMouseEnter() {
     this.setColor('red');
   }

   onMouseLeave() {
     this.setColor('orange');
   }

   private setColor(color: string): void {
     this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
   }

}
