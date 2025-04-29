import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

// the token type represents the type of the token , whther access token or refresh token ,
// the time should be put in seconds
// e.g 15minutes
export const generateToken = (userId, tokenType, time) => {
  const secret =
    tokenType === "ACCESS"
      ? process.env.YOUR_ACCESS_TOKEN_SECRET
      : process.env.YOUR_REFRESH_TOKEN_SECRET;
  const expiresIn =
    tokenType === "ACCESS"
      ? process.env.YOUR_ACCESS_TOKEN_EXPIRE_TIME
      : process.env.YOUR_REFRESH_TOKEN_EXPIRE_TIME;

  if (tokenType === "ACCESS") {
    return jwt.sign({ userId }, secret, {
      expiresIn: expiresIn,
    });
  } else if (tokenType === "REFRESH") {
    return jwt.sign({ userId }, secret, {
      expiresIn: expiresIn,
    });
  } else return null;
};
