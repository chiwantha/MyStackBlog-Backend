import { json } from "express";
import { db } from "../db.js";

export const loadComments = (req, res) => {
  const blogId = req.query.blogId;

  const q = `SELECT * FROM Vw_Comments WHERE blogId = ?`;
  db.query(q, [blogId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(200).json([]);

    return res.status(200).json(data);
  });
};

export const newComment = (req, res) => {
  const q = `INSERT INTO comment (comment,blogId,userId) VALUES (?)`;
  const VALUES = [req.body.comment, req.body.blogId, req.body.userId];
  db.query(q, [VALUES], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Comment Added !");
  });
};

export const delComment = (req, res) => {
  const q = `DELETE FROM comment WHERE id =  (?)`;
  const VALUES = [req.body.commentId[0]];
  db.query(q, [VALUES], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Comment Removed !");
  });
};
