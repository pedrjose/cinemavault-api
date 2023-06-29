import { Request, Response } from "express";
import { IUser } from "../models/User";
import { createUserService, loginUserService } from "../services/user.service";

export const createUserController = async (req: Request, res: Response) => {
  const { email, password }: IUser = req.body;

  try {
    const registerUser = await createUserService(email, password);

    res.send(registerUser);
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

export const loginUserController = async (req: Request, res: Response) => {
  const { email, password }: IUser = req.body;
  try {
    const login = await loginUserService(email, password);

    res.send(login);
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
