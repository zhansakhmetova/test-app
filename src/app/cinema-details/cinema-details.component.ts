import {Component, OnInit} from '@angular/core';
import {genreType} from '../../../content/movie.model';
import {movies} from '../../../content/movie.mock-data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cinema-details',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss']
})
export class CinemaDetailsComponent implements OnInit {
  id: number;
  genre = genreType;
  movie = movies;
  mov: any;

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.id = res.id;
      this.mov = this.movie.find(r => r.id === +this.id);
    });
  }

}
