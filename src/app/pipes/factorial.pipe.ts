import { Pipe, PipeTransform } from '@angular/core';

// PURE PIPES WATCH ONLY PRIMITIVES CHANGES AND LINK CHANGES

@Pipe({
  name: 'factorial'
})

export class FactorialPipe implements PipeTransform {
  transform(value: number, args?: any): number {
    if (value <= 0) return 0;
    let result = 1;
    for (let i = 1; i <= value; i++) {
      result = result * i;
    }
    return result;
  }
}