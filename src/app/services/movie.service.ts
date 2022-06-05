import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../constans/urls";
import {IMovie, IMovies} from "../interfaces/movie.interface";
import {Observable} from "rxjs";
import { ISearch } from '../interfaces/search.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }
  getAll(page: number = 1):Observable<IMovies>{
    return this.httpClient.get<IMovies>(urls.movies, {params: {page}})
  }
  getDetails(id:string):Observable<IMovie>{
    return this.httpClient.get<IMovie>(`${urls.movieId}${id}`)
  }
  getAllByPage(page:number):Observable<any>{
    return this.httpClient.get<any>(`${urls.movies}?page=${page}`)
  }
  getMovieByGenre(id:number):Observable<any>{
    return  this.httpClient.get<any>(`${urls.genreId}${id}`)
  }
  search(params:string):Observable<ISearch>{
    return this.httpClient.get<ISearch>(`${urls.search}${params}`)
  }
}
