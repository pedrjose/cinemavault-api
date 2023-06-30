import { Request, Response } from "express";
import { IMovie } from "../models/Movie";
import { MovieGenre } from "../types/interface.types";

import {
  insertMovieService,
  findMovieByGenreService
} from "../services/movie.service";

export const insertMovieController = async (req: Request, res: Response) => {
  const { name, genre, sinopse, banner, play, year }: IMovie = req.body;

  try {
    const movie = await insertMovieService(
      name,
      genre,
      sinopse,
      banner,
      play,
      year
    );

    res.send(movie);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({
        message: error.message,
        promise: false,
        unexpectedError: false
      });
    } else {
      res.status(500).send({
        message: error,
        promise: false,
        unexpectedError: true
      });
    }
  }
};

export const findMovieByGenreController = async (
  req: Request,
  res: Response
) => {
  const { genre }: MovieGenre = req.body;

  try {
    const genreMovies = await findMovieByGenreService(genre);

    res.send(genreMovies);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({
        message: error.message,
        promise: false,
        unexpectedError: false
      });
    } else {
      res.status(500).send({
        message: error,
        promise: false,
        unexpectedError: true
      });
    }
  }
};
