import { Router } from "express";
const router = Router();

import {
  createUserController,
  loginUserController,
  validateEmailController
} from "../controllers/user.controller";

router.post("/create-user", createUserController);
router.post("/login", loginUserController);
router.patch("/validate-email", validateEmailController);

export default router;
