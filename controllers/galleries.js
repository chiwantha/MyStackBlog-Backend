import { db } from "../db.js";

export const load = (req, res) => {
  const q =
    "SELECT id,title,category,intro,img,authorSlug,authorName FROM Vw_Blogs WHERE blog_state = 1 ORDER BY createdAt DESC";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(200).json([]);

    return res.status(200).json(data);
  });
};
