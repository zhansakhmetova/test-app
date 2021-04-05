import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CinemaDetailsComponent} from './cinema-details.component';


const routes = [
  {
    path: '',
    component: CinemaDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class CinemaDetailsModule { }
