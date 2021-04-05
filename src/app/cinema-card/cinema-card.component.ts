import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Films} from '../../../content/movie.model';

@Component({
  selector: 'app-cinema-card',
  templateUrl: './cinema-card.component.html',
  styleUrls: ['./cinema-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CinemaCardComponent implements OnInit {
  @Input() data: Films;
  @Output() val: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }

  goToCinema(id) {
    this.router.navigate(['details', id]);
  }


}
