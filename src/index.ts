import * as express from "express";
import { connectDatabase } from "./database/db";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

connectDatabase();

app.listen(port, () => console.log(`\nTHE SERVER IS HOSTED ON PORT ${port}...`));