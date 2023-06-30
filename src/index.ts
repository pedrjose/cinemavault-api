import * as express from "express";
import { connectDatabase } from "./database/db";
import * as dotenv from "dotenv";
dotenv.config();

import userRoute from "./routes/user.route";
import movieRoute from "./routes/movie.route";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/user", userRoute);
app.use("/movie", movieRoute);

connectDatabase();

app.listen(port, () =>
  console.log(`\nTHE SERVER IS HOSTED ON PORT ${port}...`)
);
