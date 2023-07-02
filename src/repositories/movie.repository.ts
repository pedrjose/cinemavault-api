import Movie from "../models/Movie";
import { IMovie } from "../models/Movie";

export const insertMovieRepository = (movie: IMovie) => Movie.create(movie);

export const findMovieByGenreRepository = (genre: String) =>
  Movie.find({ genre: { $regex: `${genre || ""}`, $options: "i" } }).sort({
    _id: -1
  });

export const findMovieByNameRepository = (title: String) =>
  Movie.find({ name: { $regex: `${title || ""}`, $options: "i" } }).sort({
    _id: -1
  });
