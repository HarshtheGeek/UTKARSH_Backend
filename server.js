// Importing required packages
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import occupationroute from "./routes/ocuupation_routes.js";

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(helmet());

// Default route
app.use("/api", occupationroute);

// Starting the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});