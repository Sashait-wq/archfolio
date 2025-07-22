import { Pipe, PipeTransform } from '@angular/core';

interface FocusItem {
  id: string;
  title: string;
  description: string;
}

@Pipe({
  name: 'joinTitles'
})
export class JoinTitlesPipe implements PipeTransform {
  transform(value: FocusItem[], separator: string = ' / '): string {
    if (!Array.isArray(value)) {
      return '';
    }
    return value.map((item) => item.title).join(separator);
  }
}
