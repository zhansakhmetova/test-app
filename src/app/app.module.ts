import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { FilterComponent } from './filter/filter.component';
import { CinemaCardComponent } from './cinema-card/cinema-card.component';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import {RouterModule, Routes} from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import {FormsModule} from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';


const appRoutes: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'},
  {path: 'details/:id', component: CinemaDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListMoviesComponent,
    FilterComponent,
    CinemaCardComponent,
    CinemaDetailsComponent,
    MainPageComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
