const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  //Getting token from the request header
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "No authentication token provided" });
  }

  try {
    //Checking and removing "Bearer" from Token and extract the token part
    const tokenPart = token.split(" ")[1];

    //Verify the token
    const decoded = token.verify(tokenPart, process.env.JWT_SECRET_KEY);

    //Attach user information to the request object
    req.user = decoded;

    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = {
  authentication,
};
