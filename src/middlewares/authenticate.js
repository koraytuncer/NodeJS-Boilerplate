import httpStatus from "http-status";
import JWT from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const authHeader = (req.headers.authorization =
    req.headers.authorization || req.headers.Authorization);

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ error: "Bu işlemi yapmak için giriş yapmalısınız." });

  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
    if (err)
      return res
        .status(httpStatus.FORBIDDEN)
        .send({ error: err });
    req.user = user?.dataValues;
    next();
  });
};


export { authenticate };