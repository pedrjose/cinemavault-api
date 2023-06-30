import Movie from "../models/Movie";
import { IMovie } from "../models/Movie";

export const insertMovieRepository = (movie: IMovie) => Movie.create(movie);

export const findMovieByGenreRepository = (genre: String) =>
  Movie.find({ genre: `${genre}` }).sort({ _id: -1 });
