import { Movie } from './movie.class';
import { Genre } from './genre.class';

export class Moviegenre {
  id: number;
  movieId: Movie;
  genreId: Genre;

  constructor(id: number = 0, movieId: Movie = null, genreId: Genre = null) {
    this.id = id;
    this.movieId = movieId;
    this.genreId = genreId;
  }
}
