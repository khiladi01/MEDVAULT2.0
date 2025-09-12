import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./routes/page.route.js";

dotenv.config({ path: "./.env" });

const app = express();

// 🟢 Middlewares
const allowedOrigins = [
  "https://medvault-three.vercel.app", // production frontend
  "http://localhost:3000",             // local dev
  "http://localhost:3001",             // local dev alternative port
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
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
