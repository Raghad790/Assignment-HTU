//queries in the database
import pool from "../config/db.js";

//Create a new user
export const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    await pool.query("INSERT INTO users (name,email) VALUES ($1,$2) ", [
      name,
      email,
    ]);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Read all users
export const getUser = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users ");
    res.render("index.ejs", { users: result.rows });
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Update all users
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    await pool.query("UPDATE users SET name=$1,email=$2 WHERE id=$3", [
      name,
      email,
      id,
    ]);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//delete user
export const deleteUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query("DELETE  FROM users WHERE id=$1", [id]);
    res.render("index.ejs", { users: result.rows });
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
