import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../../interfaces/movie.interface";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {
  movies: IMovie[];
  page: number

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>{
      this.movieService.getMovieByGenre(id).subscribe(responce => {
        const {results} = responce
        this.movies=results
      })
    })
  }
}

