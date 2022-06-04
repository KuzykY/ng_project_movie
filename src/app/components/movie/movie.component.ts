import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  rate: number
  @Input()
  movie: IMovie;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.movieService.getDetails(id).subscribe((movie) => {
        this.rate = movie.vote_average
        this.movie = movie
      })
    })
  }

  getDetails() {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.router.navigate([`${this.movie.id}`], {relativeTo: this.activatedRoute, queryParams: {page}})
        .then(() => {
        })
    })
  }
}
