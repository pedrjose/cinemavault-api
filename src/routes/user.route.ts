import { Router } from "express";
const router = Router();

import {
  createUserController,
  loginUserController
} from "../controllers/user.controller";

router.post("/create-user", createUserController);
router.post("/login", loginUserController);

export default router;
