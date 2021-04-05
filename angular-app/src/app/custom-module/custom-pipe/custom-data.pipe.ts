import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'changeData',
  pure: false
})
export class CustomDataPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const [separator] = args;
    return value ? value.replace(/\s/gi, separator || '-') : '';
  }

}
