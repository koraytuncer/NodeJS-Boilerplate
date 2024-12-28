import CryptoJS from "crypto-js";
import JWT from "jsonwebtoken";

const PasswordToHash = (password) => {
  return CryptoJS.HmacSHA256(
    password,
    CryptoJS.HmacSHA1(password, process.env.PASSWORD_HASH).toString()
  ).toString();
};

const generateAccessToken = (user) => {
  return JWT.sign(
    { name: user.kullanici_eposta, ...user },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    {
      expiresIn: "100h",
    }
  );
};
const generateRefreshToken = (user) => {
  return JWT.sign(
    { name: user.kullanici_eposta, ...user },
    process.env.REFRESH_TOKEN_SECRET_KEY
  );
};

export { PasswordToHash, generateAccessToken, generateRefreshToken };
