import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanizeTimestamp',
})
export class HumanizeTimestampPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
