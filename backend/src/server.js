import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./routes/page.route.js";

dotenv.config({ path: "./.env" });

const app = express();

// 🟢 Middlewares
app.use(cors({
  origin: [
    "https://medvault-three.vercel.app", // production frontend (Vercel)
    "https://your-live-frontend-url.com", // add actual live frontend URL here
    "http://localhost:3000",            // local dev (Next.js default)
    "http://localhost:3001"             // if you run on port 3002 sometimes
  ], // allow frontend dev port 3002
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// 🟢 Routes
app.use("/api", router);

// 🟢 Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ message: "Something went wrong on the server" });
});

// 🟢 DB + Server
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`✅ Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ DB connection failed:", error);
  });
