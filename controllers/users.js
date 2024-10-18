import { db } from "../db.js";

export const profile = (req, res) => {
  const userId = req.query.slug;
  const q =
    "SELECT id, slug, name, email,number, createdAt, subtitle, blogcount,image, badge FROM Vw_Users WHERE slug = ?";
  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User Not Found");

    return res.status(200).json(data);
  });
};

export const loadlist = (req, res) => {
  const q = `SELECT id, slug, name, createdAt, subtitle, blogcount,image, badge from Vw_Users WHERE state = 1 ORDER BY blogcount DESC`;
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("No Any Users Found");

    return res.status(200).json(data);
  });
};
