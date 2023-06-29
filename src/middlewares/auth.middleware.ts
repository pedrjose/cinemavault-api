import { TAlgorithm, decode } from "jwt-simple";
import { NextFunction, Request, Response } from "express";
import { Session } from "../types/interface.types";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw new Error("Session has expired. Log in again!");

    const tokenDivider = authorization.split(" ");

    if (tokenDivider.length !== 2)
      throw new Error("Not authorization to do this!");

    const [schema, token] = tokenDivider;

    if (schema !== `${process.env.AUTH_SCHEMA}`)
      throw new Error("Not authorization to do this!");

    const algorithm: TAlgorithm = "HS512";

    const result: Session = await decode(
      token,
      `${process.env.SECRET_KEY}`,
      false,
      algorithm
    );

    if (!result) throw new Error("Session has expired. Log in again!");

    next();
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
