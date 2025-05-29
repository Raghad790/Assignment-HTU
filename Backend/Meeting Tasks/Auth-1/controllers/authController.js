import UserModel from "../models/userModel.js";
import {
  registerSchema,
  loginSchema,
  changePasswordSchema,
} from "../utils/validation.js";
//First method that the user will call is register, which will create a new user in the database
const AuthController = {
  async register(req, res, next) {
    try {
      //error when the user tries to register with an invalid email, password or name
      //value when the user register with a valid email, password or name
      //validate function =>the request body using Joi schemas
      //the anme of attributes in the request body should match the schema (in the validation file)
      const { error, value } = registerSchema.validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const { email, password, name } = value;
      //to check if the email already exists in the database
      //to ensure that the email is unique, we will check if the email already exists in the database
      const existingUser = await UserModel.findByEmail(email);
      if (existingUser) throw new Error("Email already in use");

      const newUser = await UserModel.create({ email, password, name });
      // Generate a JWT token for the user after successful registration(to ensure the valid register user)
      //generateToken method will return a token that will be used to authenticate the user in the future)
      const token = UserModel.generateToken(newUser.id);

      req.session.userId = newUser.id;
      req.session.authenticated = true;

      res.cookie("token", token, {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, //1 day
        sameSite: "strict",
      });
      // Respond with the token and user details
      //the user details will be sent to the client side
      //the status ,token that the user will use to authenticate in the future and the user details
      res.status(201).json({
        success: true,
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: user.created_at,
        },
      });
    } catch (error) {
      next(error);
    }
  },

  async login(req, res, next) {
    try {
      const { error, value } = loginSchema.validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const { email, password } = value;

      const user = await UserModel.findByEmail(email);
      // Check if user exists and password matches
      if (!user) throw new Error("Invalid credentials");
      //if the email exists in the database, we will check if the password is correct
      //verifyPassword method will check if the password is correct
      const isMatch = await UserModel.verifyPassword(password, user.password);
      if (!isMatch) throw new Error("Invalid credentials");

      //Create session
      req.session.userId = user.id;
      req.session.authenticated = true;

      //if the password is correct, we will generate a token for the user
      const token = UserModel.generateToken(user.id);

      //To set the token inside the cookies
      res.cookie("token", token, {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, //1 day
        sameSite: "strict",
      });

      //without the status code, the response will be 200 by default
      res.json({
        success: true,
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      next(error);
    }
  },

  async getMe(req, res, next) {
    try {
      const user = await UserModel.findById(req.user.id);
      if (!user) throw new Error("User not found");

      res.json({
        success: true,
        user,
      });
    } catch (error) {
      next(error);
    }
  },

  async changePassword(req, res, next) {
    try {
      const { error, value } = changePasswordSchema.validate(req.body);
      if (error) throw new Error(error.details[0].message);

      const { currentPassword, newPassword } = value;
      const user = await UserModel.findByEmail(req.user.email);

      const isMatch = await UserModel.verifyPassword(
        currentPassword,
        user.password
      );
      if (!isMatch) throw new Error("Current password is incorrect");

      await UserModel.updatePassword(req.user.id, newPassword);

      res.json({
        success: true,
        message: "Password updated successfully",
      });
    } catch (error) {
      next(error);
    }
  },

  async logout(req, res, next) {
    try {
      req.session.destroy((err) => {
        if (err) throw err;
      });
      res.clearCookie("token");
      res.clearCookie("connect.sid");
      res.json({ success: true, message: "logges out successfully" });
    } catch (error) {}
  },
};

export default AuthController;
