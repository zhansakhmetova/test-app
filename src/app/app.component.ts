import {Component, Output} from '@angular/core';
import { ROUTES} from '@angular/router';
import {genreType, GenreType} from '../../content/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentItem = genreType;
  title = 'Cinema';
  movieName = '';
}
