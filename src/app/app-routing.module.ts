import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CinemaDetailsComponent} from '../app/cinema-details/cinema-details.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';



@NgModule({
  imports: [BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
