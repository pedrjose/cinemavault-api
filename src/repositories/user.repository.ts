import User, { IUser } from "../models/User";

export const createUserRepository = (user: IUser) => User.create(user);

export const findUserByEmailRepository = (email: string) =>
  User.findOne({ email: email }).select("+password");

export const validateEmailRepository = (email: string) =>
  User.findOneAndUpdate({ email: email }, { validated: true });
