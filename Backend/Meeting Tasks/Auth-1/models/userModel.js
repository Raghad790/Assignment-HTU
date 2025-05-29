import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { query } from "../config/db.js";

const UserModel = {
  //to create a new user we need email,password and name
  //these values will be passed from the controller (from  the request body'client side')
  async create({ email, password, name }) {
    //since we are dealing with qurey we need try,catch
    try {
      //to hash the password we need to use bcrypt(because we cant store the password as plain text in the database)
      // bcrypt.hash() takes the password and the number of salt rounds as arguments
      //hash() is an asynchronous function, so we need to use await(promise)
      const hashedPassword = await bcrypt.hash(
        password,
        parseInt(process.env.BCRYPT_SALT_ROUNDS)
      );

      const { rows } = await query(
        `INSERT INTO users (email, password, name) 
         VALUES ($1, $2, $3) 
         RETURNING id, email, name, created_at`,
        [email, hashedPassword, name]
      );

      return rows[0];
    } catch (error) {
      if (error.code === "23505") {
        throw new Error("Email already exists");
      }
      throw error;
    }
  },
  //NEW METHOD (I give the email and it returns the user)
  async findByEmail(email) {
    try {
      const { rows } = await query(
        "SELECT id, email, password, name FROM users WHERE email = $1",
        [email]
      );
      if (rows.length > 0) {
        return rows[0];
      }
    } catch (error) {
      throw error;
    }
  },
//when the system has users will return the user id so we dont need try catch
  async findById(id) {
    const { rows } = await query(
      "SELECT id, email, name FROM users WHERE id = $1",
      [id]
    );
    return rows[0];
  },
//Gernerate a JWT token for the user
//generateToken => Static Method =>take the user_id and do the operation
  generateToken(userId) {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    });
  },

//to verify the repeated password we need to use bcrypt.compare()
//compare() takes the candidate password and the hashed password as arguments (promise)


//verifyPassword is instanse method
  async verifyPassword(candidatePassword, hashedPassword) {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  },

  async updatePassword(userId, newPassword) {
    const hashedPassword = await bcrypt.hash(
      newPassword,
      parseInt(process.env.BCRYPT_SALT_ROUNDS)
    );
    await query("UPDATE users SET password = $1 WHERE id = $2", [
      hashedPassword,
      userId,
    ]);
  },
};

export default UserModel;
