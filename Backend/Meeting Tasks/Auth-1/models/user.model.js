import sequelize from "../config/dbS.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//user is a constructor function
const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      //primary key =>boolean attribute 
      primaryKey: true,
      // auto increment => automatically generate a unique value for each new record(because the id is serial number)
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      //the dublicate email is not allowed
        //unique => the email should be unique in the database
      unique: true,
      validate: {
        isEmail: true,
        len: [6, 255],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      //function set is used to set the value of the password
        //it will hash the password before saving it to the database
      set(value) {
        //Generate the salt 
        const salt = bcrypt.genSaltSync(
          parseInt(process.env.BCRYPT_SALT_ROUNDS)
        );
        //Hash the password
        const hash = bcrypt.hashSync(value, salt);
        this.setDataValue("password", hash);
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255],
      },
    },
  },
  
  {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    //hook methods 
    hooks: {
      afterCreate: (user) => {
        user.password = undefined;
      },
      afterUpdate: (user) => {
        user.password = undefined;
      },
    },
  }
);
//to add an instance method to the constructor function we use (prototype)
User.prototype.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
//to add a static method to the constructor function we use it directly
User.generateToken = function (userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  });
};

export default User;

