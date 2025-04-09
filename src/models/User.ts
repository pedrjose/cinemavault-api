import mongoose from "mongoose";
import { Schema } from "mongoose";
import * as bcrypt from "bcrypt";

export interface IUser {
  email: string;
  password: string;
  validated: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IValidate {
  email: string;
}

const MovieSchema = new Schema(
  {
    name: { type: String, required: true },
    genre: { type: String, required: true },
    sinopse: { type: String, required: true },
    banner: { type: String, required: true },
    play: { type: String, required: true },
    year: { type: String, required: true }
  },
  { _id: false }
);

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  validated: {
    type: Boolean,
    required: true,
    default: false
  },
  favoriteMovies: {
    type: [MovieSchema],
    required: true,
    default: []
  },
  watchLaterMovies: {
    type: [MovieSchema],
    required: true,
    default: []
  }
});

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
