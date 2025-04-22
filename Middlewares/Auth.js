import User from "../Models/userSchema.js";
import jwt from "jsonwebtoken";

export const Authenticated = async (req, res, next) => {
  const token = req.header("Auth");
  if (!token) {
    return res.json({ message: "login first" });
  }
  const decoded = jwt.verify(token, "dsdd");
  const id = await User.findById(id);
  let user = await User.findById(id);
  if (!user) {
    return res.json({ message: "user not exist" });
  }
  req.user = user;
  next();
};
