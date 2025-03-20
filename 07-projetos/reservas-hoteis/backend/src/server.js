import express from "express";
import { login, register } from "./routes/auth/index.js";
import authenticateToken from "./middleware/auth.js";
import { createBooking, getBooks } from "./routes/books/index.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({ message: "server is running" });
});

app.post("/api/auth/register", register);
app.post("/api/auth/login", login);

// Rotas privadas
app.get("/api/bookings", authenticateToken, getBooks);
app.post("/api/bookings", authenticateToken, createBooking);

// TODO: Add delete booking route
// TODO: Add update booking route
// TODO: Add get booking by id route

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
