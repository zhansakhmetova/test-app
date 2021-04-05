import {Component} from '@angular/core';
import {genreType} from '../../../content/movie.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent  {
  genre = '';

  getGenreName(genre) {
    this.genre = genre;
  }

}
