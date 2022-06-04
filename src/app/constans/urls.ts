import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  movies: `${API}/discover/movie`,
  genres: `${API}/genre/movie/list`,
  movieId: `${API}/movie/`,
  genreId:`${API}/discover/movie?with_genres=`
}
