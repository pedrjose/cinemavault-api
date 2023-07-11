import * as bcrypt from "bcrypt";
import {
  createUserRepository,
  findUserByEmailRepository,
  validateEmailRepository
} from "../repositories/user.repository";
import { encodeSession } from "./support.service";
import { PartialSession } from "../types/custom.types";

export const createUserService = async (email: string, password: string) => {
  if (!email || !password) throw new Error("Submit all required fields!");

  const create = await createUserRepository({
    email,
    password,
    validated: false
  });

  if (!create) throw new Error("User creating error. Try again!");

  const verifyEmailCode = Math.floor(Date.now() * Math.random()).toString(36);

  return {
    message:
      "User created successfully. A verification code has been sent to your email inbox. Please check it to proceed, and welcome to Cinemavault!",
    verify: verifyEmailCode,
    promise: true
  };
};

export const loginUserService = async (email: string, password: string) => {
  const user = await findUserByEmailRepository(email);

  if (!user) throw new Error("Email or Password not found!");

  if (!user.validated)
    throw new Error("It's not possible to log in with unverified emails!");

  const passwordIsValid = await bcrypt.compare(password, user.password);

  if (!passwordIsValid) throw new Error("Email or Password not found!");

  const partialSession: PartialSession = {
    id: Math.floor(Math.random() * 1000000),
    dateCreated: new Date().getTime(),
    username: user.email
  };

  const token = await encodeSession(
    `${process.env.SECRET_KEY}`,
    partialSession
  );

  if (!token) throw new Error("Authentication error. Try again!");

  return {
    message: "Login successful!",
    token,
    userId: user._id,
    email: user.email,
    promise: true
  };
};

export const validateEmailService = async (email: string) => {
  await validateEmailRepository(email);

  return { message: "Email validated successfully!" };
};
