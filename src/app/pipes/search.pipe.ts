import { Pipe, PipeTransform } from '@angular/core';
import {Films} from '../../../content/movie.model';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Films[], search: string): Films[] {
    return value.filter(v => (v.name.toLowerCase()).includes(search.toLowerCase()));
  }

}
