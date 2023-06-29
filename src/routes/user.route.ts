import { Router } from "express";
const router = Router();

import { createUserController } from "../controllers/user.controller";

router.post("/create-user", createUserController);
// router.post("user-login", userLoginController);

export default router;
