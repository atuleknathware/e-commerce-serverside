import mongoose from "mongoose";
import express from "express";
import router from "./Routes/userRoutes.js";
const server = express();
import cors from "cors";

server.use(express.json());
server.use(cors());

server.use("/api/user", router);

mongoose
  .connect(
    "mongodb+srv://atulware22:2NhABYGf0H3KLyab@cluster0.li5ci.mongodb.net/EcommerceWebsite"
  )
  .then(() => {
    console.log("server is connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(1001, () => {
  console.log("server is listening on port 1001");
});
