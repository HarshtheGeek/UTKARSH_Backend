// Importing required packages
import "dotenv/config";
import express from "express";
import helmet from "helmet";

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(helmet());

// Default route
app.use("/api", (req, res) => {
  res.json({ message: "API is working" });
});

// Starting the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});













//Controllers
//Models
//Services