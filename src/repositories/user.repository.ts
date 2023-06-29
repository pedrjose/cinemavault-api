import User, { IUser } from "../models/User";

export const createUserRepository = (user: IUser) => User.create(user);
