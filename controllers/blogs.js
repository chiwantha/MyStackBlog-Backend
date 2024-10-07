import { query } from "express";
import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const loadLatest = (req, res) => {
  const q =
    "SELECT * from Vw_Blogs WHERE blog_state = 1 ORDER BY createdAt DESC LIMIT 6";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("No Any Blogs Found");

    return res.status(200).json(data);
  });
};

export const loadfeed = (req, res) => {
  const q =
    "SELECT * from Vw_Blogs WHERE blog_state = 1 ORDER BY createdAt DESC ";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("No Any Blogs Found");

    return res.status(200).json(data);
  });
};

export const NewBlog = (req, res) => {
  const token = req.cookies.accesstoken;
  if (!token) return res.status(401).json("NOT LOGGED IN");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token Is Not Valid");

    const q =
      "INSERT INTO blog (title, category, intro, img, content, userId) VALUES (?)";

    const { img, ...data } = req;

    const VALUES = [
      req.body.title,
      req.body.category,
      req.body.intro,
      req.body.img,
      req.body.content,
      userInfo.id,
    ];

    // Error handling
    if (!req.body.title || req.body.title.trim() === "") {
      return res.status(400).json("Title is Missing !");
    }
    if (!req.body.category || req.body.category.trim() === "") {
      return res.status(400).json("Category is Missing !");
    }
    if (!req.body.intro || req.body.intro.trim() === "") {
      return res.status(400).json("Intro is Missing !");
    }
    if (!req.body.content || req.body.content.trim() === "") {
      return res.status(400).json("Content is Missing !");
    }
    if (!userInfo.id) {
      return res.status(400).json("User Id is Missing !");
    }

    // Database insertion
    db.query(q, [VALUES], (err, data) => {
      if (err) return res.status(500).json("Database Error: " + err.message);
      return res.status(200).json("Blog Added !");
    });
  });
};

export const category = (req, res) => {
  const q = "SELECT id,category FROM category WHERE state = 1";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

export const loadSnigle = (req, res) => {
  const q = "SELECT * from Vw_Blogs WHERE blog_state = 1 AND id = ?";
  db.query(q, [req.query.blogId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("No Any Blogs Found");

    return res.status(200).json(data);
  });
};
