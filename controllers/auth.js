import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    const q =
      "INSERT INTO users (username, slug, email, password, name) VALUE (?)";
    const values = [
      req.body.username,
      req.body.slug,
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

export const login = (req, res) => {
  // CHECK USER EXSIST
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User Not Found");

    // IF USER EXSIST CHECK PASSWORD
    const comparePassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!comparePassword)
      return res.status(401).json("Invalid Username or Password");

    // IF ALL OKAY , THEN CREATE THE JWT TOKENS
    const token = jwt.sign({ id: data[0].id }, "secretkey");
    // CREATE THE USER DETAILS ARRAY FOR COOKIE
    const { password, ...otherUserDetails } = data[0];

    return res
      .cookie("accesstoken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(otherUserDetails);
  });
};

export const logout = (req, res) => {
  return res
    .clearCookie("accesstoken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User Logged Out !");
};
