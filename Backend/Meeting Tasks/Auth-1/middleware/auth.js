import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
//we need to export the authenticate and authorize functions so we can use them in the routes
export const authenticate = async (req, res, next) => {
  try {
    //to check if it is authenticated in the sesssion
    if (req.session.authenticated && req.session.userId) {
      const user = await UserModel.findById(req.session.userId);
      if (user) {
        req.user = user;
        return next();
      }
    }

    // Extract the token from the Authorization header
    // The token should be in the format

    // const authHeader = req.headers["authorization"];

    //split to get the token part(Bearer <token>)
    //token will be the second part of the array after splitting by space(in index 1)
    // const token = authHeader?.split(" ")[1];
    const token = req.cookie.token;
    if (!token) {
      throw new Error("Authentication token missing");
    }
    //to decode the token and verify it
    //jwt.verify() will decode the token and verify it using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.id);
    //always check if the user exists in the database
    if (!user) {
      throw new Error("User not found");
    }
    //Renew session
    req.session.userId = user.id;
    req.session.authenticated = true;
    //req.user is avnew property that we will use to store the user information
    req.user = user;
    next();
  } catch (error) {
    error.statusCode = 401;
    //401 is the status code for Unauthorized user
    next(error);
  }
};

export const authorize = (roles = []) => {
  return (req, res, next) => {
    if (roles.length && !roles.includes(req.user.role)) {
      const error = new Error("Unauthorized access");
      error.statusCode = 403; //403 is the status code for Forbidden (unauthorized)access
      return next(error);
    }
    next();
  };
};
