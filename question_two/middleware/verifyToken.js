import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export const verifyToken = (req, res, next) => {
  // get the token from either the authorization headers or the signed token on the cookie

  //  if from the headers
  const tokenFromHeaders = req.headers["authorization"];

  // if from cookies
  const tokenFromCookies = req.cookies.token_name;

  // pls note that , only one of the above is always selected based on the teams preference and security standard

  // check if token exists
  if (!tokenFromHeaders || tokenFromCookies) {
    return res.status(401).json({
      success: false,
      message: "Token not found, un authorized",
    });
  }

  // proceed if valid .

  // if you want to use the one from headers , you have to split the string based on the an empty space then select the second item of the array

  try {
    const tokenPayLod = jwt.verify(tokenFromCookies, "token secret here");

    req.user = tokenPayLod;

    next();
  } catch (error) {
    next(error);
  }
};
