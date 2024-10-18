import multer from "multer";

const storageBlog = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Client/public/upload/blog");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

export const uploadBlogImage = multer({ storage: storageBlog });

const storageProfile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Client/public/upload/profile");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

export const uploadProfileImage = multer({ storage: storageProfile });
