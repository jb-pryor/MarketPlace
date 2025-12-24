import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

const db = mysql.createConnection({

  host:  process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT

});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
  } else {
    console.log("✅ MySQL connected successfully");
  }
});

app.get('/items', (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if(err) return res.status(500).json(err);
    res.json(results);
  });
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if(err) return res.status(500).json(err);
    res.json(results);
  });
});

app.post("/users", async (req, res) => {
  const { email, username, password } = req.body;

  await db.query(
    "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
    [email, username, password]
  );

  res.status(201).json({ message: "User created" });
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
