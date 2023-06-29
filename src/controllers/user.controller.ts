import { Request, Response } from "express";
import { IUser } from "../models/User";
import { createUserService } from "../services/user.service";

export const createUserController = async (req: Request, res: Response) => {
  const { email, password }: IUser = req.body;

  try {
    const registerUser = await createUserService(email, password);

    res.send(registerUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message, promise: false });
    } else {
      res
        .status(500)
        .send({ message: `Unexpected error: ${error}`, promise: false });
    }
  }
};
