import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import http from "http";
import connectDb from "./utils/connectDb.js";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";
import mainRouter from "./routes/index.js";
const app = express();


app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ limit: "16kb" }));

app.use(bodyParser.json())

app.use("/api", mainRouter);

app.use(errorHandlerMiddleware);
app.get("/", (req, res) => {
  res.send("hello wo");
});
const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

connectDb()
  .then(() => {
    server.listen(PORT, () => console.log("server is listening to port 4000"));
  })
  .catch((err) => console.log("error", err));
