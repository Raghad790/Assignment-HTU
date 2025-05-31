import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import { notFound, errorHandler } from "./middleware/error.js";
import "./config/db.js";
import session from "express-session";
import cookieParser from "cookie-parser";

//Backend application
const app = express();

// Security middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Logging
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
//Routes=>Api
app.use("/api/auth", authRoutes);

app.use(cookieParser());
app.use(
  session({
    //when sending cookies to send the cookies to the websites with https
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      //the type of request is http
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, //1 day
      sameSite:"strict"
    },
  })
);

// Health check
//to check if the server is running(server health check)
app.get("/health", (req, res) => res.json({ status: "OK" }));

// Error handling
app.use(notFound);
app.use(errorHandler);

//to use my app in the server.js file
export default app;
