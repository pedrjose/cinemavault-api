import { Router } from "express";
const router = Router();

import { authMiddleware } from "../middlewares/auth.middleware";
import {
  insertMovieController,
  findMovieByGenreController
} from "../controllers/movie.controller";

router.post("/insert-movie", insertMovieController);
router.get("/find-by-genre", authMiddleware, findMovieByGenreController);

export default router;