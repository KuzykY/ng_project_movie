import {Component, Input, OnInit} from '@angular/core';
import {IGenres} from "../../interfaces/genre.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input()
  genre: IGenres
  movie: IMovie

  constructor(private router:Router,private activatedRoute: ActivatedRoute,private movieService:MovieService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.movieService.getMovieByGenre(id).subscribe((movie)=>{
        this.movie=movie
      })
    })
  }
  getAllMoviesByGenre() {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.router.navigate([`${this.genre.id}`], {relativeTo: this.activatedRoute, queryParams: {page}})
        .then(() => {
        })
    })
  }
}
