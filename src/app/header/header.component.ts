import {Component, OnInit} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import {movies} from '../../../content/movie.mock-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mov = movies;
  constructor() {
  }

  ngOnInit(): void {
  }


}
