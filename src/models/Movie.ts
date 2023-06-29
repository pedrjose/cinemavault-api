import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface IMovie {
  name: string;
  genre: string;
  sinopse: string;
  banner: string;
  year: string;
}

const MovieSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  sinopse: {
    type: String,
    required: true
  },
  banner: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  }
});

const Movie = mongoose.model<IMovie>("Movie", MovieSchema);

export default Movie;
