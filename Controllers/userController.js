import User from "../Models/userSchema.js";
import bcrypt from "bcryptjs";

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user)
      return res.json({ message: "User already exist", success: false });

    const hashPass = await bcrypt.hash(password, 10);

    user = new User({ name, email, password: hashPass });
    await user.save();
    res.json({ message: "User register successfully", user });
  } catch (err) {
    res.json({ error: err });
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const getOnedata = await User(id);
    res.json({ message: "get one Data", getOnedata });
  } catch (err) {
    res.json({ error: err });
  }
};
