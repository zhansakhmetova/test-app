import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {movies} from '../../../content/movie.mock-data';
import {GenreType} from '../../../content/movie.model';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnChanges {
  @Input() checkedGenre: string;
  movies = movies;
  filteredMovies = [];
  search = '';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkedGenre = changes.checkedGenre.currentValue;
    this.filteredMovies = [];
    this.movies.filter(m => {
      if (m.genres.includes(this.checkedGenre as GenreType)) {
        this.filteredMovies.push(m);
      }
    });
  }

  getVal(event) {
    console.log(event);
  }

}
