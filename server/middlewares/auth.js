import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    // const { jwt } = jwt;
    // console.log(req.headers.authorization);
    // const token = req.headers.authorization.split("Bearer")[1];
    const token = req.headers.authorization.split(" ")[1];
    let decodeData = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodeData?.id;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
