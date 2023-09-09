const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDb = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//products
app.use("/api/products", productRoutes);

connectDb();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
