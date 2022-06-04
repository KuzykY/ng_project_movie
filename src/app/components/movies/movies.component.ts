import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[];
  page: number;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(value => this.page = +value['page'])

    if (!this.page) {
      this.movieService.getAll(this.page = 1).subscribe(value => {
        this.movies = value.results
      })
    } else {
      this.movieService.getAllByPage(this.page).subscribe(value => {
        this.movies = value.results
      })
    }
  }

  next(): void {
    this.page = this.page + 1

    this.router.navigate([''], {queryParams: {page: this.page}})
    this.movieService.getAllByPage(this.page).subscribe(value => {
      this.movies = value.results
    })
  }

  prev() {
    this.page = this.page - 1
    this.router.navigate([''], {queryParams: {page: this.page}})
    this.movieService.getAllByPage(this.page).subscribe(value => {
      this.movies = value.results
    })
  }
}
