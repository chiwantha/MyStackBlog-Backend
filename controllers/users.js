import { db } from "../db.js";

export const profile = (req, res) => {
  const userId = req.query.slug;
  const q = "SELECT * FROM users WHERE slug = ?";
  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User Not Found");

    return res.status(200).json(data);
  });
};
