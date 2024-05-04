import jwt from "jsonwebtoken";
const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (
      email != process.env.ADMIN_EMAIL ||
      password != process.env.ADMIN_PASSWORD
    ) {
      return res
        .status(400)
        .json({ success: false, message: "failed to login" });
    }

    const token = jwt.sign(
      {
        name: "Admin",
        role: "admin",
      },
      process.env.TOKEN_KEY,
      { expiresIn: "1d" }
    );

    return res
      .status(200)
      .json({ success: true, message: "login success", token });
  } catch (error) {
      console.log(error);
    next(error);
  }
};

const getAdmin = async (req,res,next)=>{
  try {

    const token = req.headers.authorization
    if(!token){
      return res.status(400).json({success:false,message:"no token found"})
    }
    const verifyToken = jwt.verify(token.substring(7),process.env.TOKEN_KEY)
    
if(!verifyToken){
  return res.status(400).json({success:false,message:"invalid token"})

}
return res.status(200).json({success:true,data:verifyToken})


  } catch (error) {
    next(error)
  }
}

export { adminLogin ,getAdmin};
