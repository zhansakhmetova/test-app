import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GenreType, genreType} from '../../../content/movie.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() val: EventEmitter<string> = new EventEmitter<string>();
  @Output() reset: EventEmitter<string> = new EventEmitter<string>();
  genres = genreType;
  genre: GenreType;
  genreList: string[] = [];
  result = [];

  constructor() {
  }

  ngOnInit(): void {
    Object.keys(this.genres).map(g => {
      this.genreList.push(this.genres[g]);
    });
  }

  getMovieByGenre(g) {
    this.val.emit(g);
  }



}
