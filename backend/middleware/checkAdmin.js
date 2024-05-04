import jwt from "jsonwebtoken";
const checkIfAdmin = async (req, res, next) => {
  try {
    const btoken = req.headers.authorization;
    if (!btoken) {
      return res
        .status(400)
        .json({ success: false, message: "no token found" });
    }
    const token = btoken.substring(7);

    const tokenVerify = jwt.verify(token, process.env.TOKEN_KEY);
    if (!tokenVerify) {
      return res.status(400).json({ success: false, message: "invalid token" });
    }

    if (tokenVerify.role !== "admin") {
      return res
        .status(401)
        .json({ success: false, message: "u are unauthorized" });
    }
    next();

  } catch (error) {
    next(error);
  }
};

export { checkIfAdmin };
