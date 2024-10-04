import mysql2 from "mysql2";

export const db = mysql2.createPool({
  host: "153.92.15.9",
  user: "u674260424_mystack",
  password: "Kchordgroup*789789",
  database: "u674260424_mystack",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
