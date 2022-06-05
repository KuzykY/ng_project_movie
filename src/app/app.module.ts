import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainInterceptor} from "./main.interceptor";
import {RouterModule} from "@angular/router";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { GenreBadgeComponent } from './components/genre-badge/genre-badge.component';
import { GenreComponent } from './components/genre/genre.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesByGenreComponent } from './components/movies-by-genre/movies-by-genre.component';
import {AppRoutingModule} from "./app-routing.module";
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    MoviesComponent,
    GenreBadgeComponent,
    GenreComponent,
    MovieDetailsComponent,
    MovieComponent,
    MoviesByGenreComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: MainInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
