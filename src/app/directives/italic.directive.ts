import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[pkItalic]'
})
export class ItalicDirective {
  private fontStyle: string = 'normal';

  constructor() { }

  // Геттеры возрвращают значения для свойств
  @HostBinding('style.fontStyle') get getfontStyle() {
    return this.fontStyle;
  }

  // Геттеры возрвращают значения для свойств
  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontStyle = 'italic';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fontStyle = 'normal';
  }


}

