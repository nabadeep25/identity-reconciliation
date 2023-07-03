import express from "express";
import dotenv from "dotenv";
import rootRouter from "./router/intex";

dotenv.config({ path: ".env" });

const app = express();

app.use(express.json());
app.use(rootRouter);

app.listen(process.env.PORT, () => {
  console.log("listening at port", process.env.PORT);
});
