const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongoDB connecting
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error", err);
  });

//Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

//start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
