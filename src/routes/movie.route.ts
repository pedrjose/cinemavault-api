import { Router } from "express";
const router = Router();

import { authMiddleware } from "../middlewares/auth.middleware";
import {
  insertMovieController,
  findMovieByGenreController,
  findMovieByNameController
} from "../controllers/movie.controller";

router.post("/insert-movie", insertMovieController);
router.get("/find-by-genre", authMiddleware, findMovieByGenreController);
router.get("/find-by-name", authMiddleware, findMovieByNameController);

export default router;
