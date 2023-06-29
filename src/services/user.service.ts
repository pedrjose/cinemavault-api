import { createUserRepository } from "../repositories/user.repository";

export const createUserService = async (email: string, password: string) => {
  if (!email || !password) throw new Error("Submit all required fields!");

  const create = await createUserRepository({ email, password });

  if (!create) throw new Error("User creating error. Try again!");

  const verifyEmailCode = Math.floor(Date.now() * Math.random()).toString(36);

  return {
    message:
      "User created successfully. A verification code has been sent to your email inbox. Please check it to proceed, and welcome to Cinemavault!",
    verify: verifyEmailCode,
    promise: true
  };
};
