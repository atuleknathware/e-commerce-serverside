import User from "../Models/userSchema.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "user exist" });
  }
  const hashPass = await bcrypt.hash(password, 10);
  user = await User.save({ name, email, password: hashPass });
  res.json({ message: "user register successfull", user });
};

export const login = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "user not exist" });
  }
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    return res.json({ message: "invalid password" });
  }
  const token = jwt.sign({ userId: user._id }, "", { expiresIn: "1d" });

  return res.json({ token });
};
