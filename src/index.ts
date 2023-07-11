import * as express from "express";
import { connectDatabase } from "./database/db";
import { corsAuth } from "./middlewares/cors.middleware";
import * as dotenv from "dotenv";
dotenv.config();

import userRoute from "./routes/user.route";
import movieRoute from "./routes/movie.route";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/user", corsAuth, userRoute);
app.use("/movie", corsAuth, movieRoute);

connectDatabase();

app.listen(port, () =>
  console.log(`\nTHE SERVER IS HOSTED ON PORT ${port}...`)
);
