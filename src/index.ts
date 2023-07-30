import express from "express";
import dotenv from "dotenv";
import { playgroundRouter } from "./playground.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/playground", playgroundRouter);

app.listen(PORT, () => console.log("Server started and listening at PORT:", PORT));