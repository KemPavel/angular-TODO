import { Pipe, PipeTransform } from '@angular/core';

// IMPURE PIPES WATCH ALL CHANGES EVEN IN OBJECTS AND ARRAYS

@Pipe({
  name: 'join',
  pure: false
})

export class JoinPipe implements PipeTransform {
  transform(array: string[], start?: number, end?: number): string {
    let result = array;
    if(start !== undefined) {
      if(end !== undefined) {
        result = array.slice(start, end);
      }
      else {
        result = array.slice(start);
      }
    }
    return result.join(", ");
  }
}