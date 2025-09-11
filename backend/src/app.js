import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware.js";
import { auth } from "./middlewares/auth.middleware.js";
import { router } from "./routes/page.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Public routes (e.g., registration, login)
app.use("/api", router);

// Protected routes example (if needed):
// app.use("/api/protected", auth, protectedRouter);

// Error handler should be last
app.use(errorHandler);

export { app };