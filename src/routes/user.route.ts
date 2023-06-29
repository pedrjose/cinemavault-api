import { Router } from "express";
const router = Router();

import {
  createUserController,
  loginUserController
} from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

router.post("/create-user", createUserController);
router.post("/login", loginUserController);

export default router;
