import { User } from "../model/user.model.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res
        .status(400)
        .json({ success: false, message: "email already exists" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hashedPass });

    if (!user) {
      return res
        .status(500)
        .json({ success: false, message: "failed to create user" });
    }
    return res
      .status(200)
      .json({ success: true, message: " created new user" });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (!existUser) {
      return res
        .status(400)
        .json({ success: false, message: "user doesnot exist!" });
    }

    const checkMatch = await bcrypt.compare(password,existUser.password);

    if (!checkMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid user crendientials" });
    }

    const token = jwt.sign(
      { name: existUser.username, role: "user" },
      process.env.TOKEN_KEY,
      { expiresIn: "3d" }
    );

    return res
      .status(200)
      .json({ success: true, message: "login success", token });
  } catch (error) {
    next(next);
  }
};


const getuser = async (req,res,next)=>{
  try {
  const  token =  req.headers.authorization

  const verifyToken = jwt.verify(token.substring(7),process.env.TOKEN_KEY)

  if(!verifyToken){
    return res.status(400).json({success:false,message:"Invalid Token"})
  }

  return res.status(200).json({success:true,message:"ok" , data:verifyToken})

  
    
  } catch (error) {
    next(error)
  }
}

export { login, signup  ,getuser};
