import {
  insertMovieRepository,
  findMovieByGenreRepository
} from "../repositories/movie.repository";

export const insertMovieService = async (
  name: string,
  genre: string,
  sinopse: string,
  banner: string,
  play: string,
  year: string
) => {
  if (!name || !genre || !sinopse || !banner || !play || !year)
    throw new Error("Submit all required fields!");

  const insert = await insertMovieRepository({
    name,
    genre,
    sinopse,
    banner,
    play,
    year
  });

  if (!insert) throw new Error("Insert movie error. Try again!");

  return { message: `Movie added to 'Cinemavault' catalog!` };
};

export const findMovieByGenreService = async (genre: string) => {
  const movies = await findMovieByGenreRepository(genre);

  if (!movies || movies.length === 0) throw new Error("Genre not found!");

  return movies;
};
