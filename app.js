// Users should be able to submit feedback (name, email, message).
// Admin should be able to view all feedback.
// Store data temporarily (for now, in memory or JSON file — no DB).
// Simple validation (e.g., all fields required).
// Basic error handling.

const express = require("express");
const path = require("path");

const rootRoute = require("./routes/root");
const adminRoute = require("./routes/admin");
const sequelize = require("./database");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", rootRoute);
app.use("/admin", adminRoute);

(async () => {
  try {
    await sequelize.sync();
    console.log("Synchronise done between models and database😌");
  } catch (err) {
    console.log(err);
  }
})();
app.listen("3000", () => {
  console.log("Server is Running");
});
