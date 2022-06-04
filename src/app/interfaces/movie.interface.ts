import {IGenres} from "./genre.interface";

export interface IMovies {
  page: number;
  results: IMovie[];
}
export interface IMovie {
  adult:boolean,
  backdrop_path:string,
  genre_ids:IGenres[],
  id:string,
  original_language:string,
  original_title:string,
  overview:string,
  popularity:string,
  poster_path:string,
  release_date:string,
  title:string,
  vote_average:number,
  vote_count:string
}
