import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollorInr'
})
export class DollorInrPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let a= value*81.27;
    return a;
  }

}
