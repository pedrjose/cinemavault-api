import mongoose from "mongoose";
import { Schema } from "mongoose";
import * as bcrypt from "bcrypt";

export interface IUser {
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
});


UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
