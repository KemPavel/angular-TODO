import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[pkBold]'
})
export class BoldDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    // this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
   }

   @HostListener('mouseenter') onMouseEnter() {
     this.setFontWeight('bold');
   }

   @HostListener('mouseleave') onMouseLeave() {
     this.setFontWeight('normal');
   }

   private setFontWeight(val: string): void {
     this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', val);
   };

}
