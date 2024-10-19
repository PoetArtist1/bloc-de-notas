const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

const app = express();
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "blocdenotas",
  password: "0502",
  port: 5432,
});

app.use(cors());
app.use(express.json());

// Middleware de autenticación JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(403);

  jwt.verify(token, "secret_key", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Registro de usuario
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: "User already exists" });
  }
});

// Login de usuario
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);

  if (result.rows.length > 0) {
    const user = result.rows[0];
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        "secret_key"
      );
      return res.json({ token, user: { name: user.username } });
    }
  }
  res.status(400).json({ error: "Invalid credentials" });
});

// Obtener notas del usuario
app.get("/notes", authenticateToken, async (req, res) => {
  const result = await pool.query("SELECT * FROM notes WHERE user_id = $1", [
    req.user.id,
  ]);
  res.json(result.rows);
});

// Agregar nota nueva
app.post("/notes", authenticateToken, async (req, res) => {
  const { title, content } = req.body;
  const result = await pool.query(
    "INSERT INTO notes (user_id, title, content) VALUES ($1, $2, $3) RETURNING *",
    [req.user.id, title, content]
  );
  res.status(201).json(result.rows[0]);
});

// Actualizar nota
app.put("/notes/:id", authenticateToken, async (req, res) => {
  const { title, content } = req.body;
  const result = await pool.query(
    "UPDATE notes SET title = $1, content = $2 WHERE id = $3 AND user_id = $4 RETURNING *",
    [title, content, req.params.id, req.user.id]
  );
  if (result.rowCount === 0) {
    return res.status(404).json({ error: "Note not found" });
  }
  res.json(result.rows[0]);
});

app.delete("/notes/:id", async (req, res) => {
  const result = await pool.query(`DELETE FROM notes WHERE id=$1`, [
    req.params.id,
  ]);
  return res.json({ status: true });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
