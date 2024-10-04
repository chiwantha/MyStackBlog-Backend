import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  // CREATE USER
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(400).json("User Already Exsists");

    // CREATE HASHED PASSWORD
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    // CREATE USER
    const q = "INSERT INTO users (username, email, password, name) VALUE (?)";
    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("User has Been Created !");
    });
  });
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
