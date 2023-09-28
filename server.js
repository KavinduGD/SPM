const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDb = require("./config/db");
const demandRoutes = require("./routes/demandRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//products
app.use("/api/products", productRoutes);
app.use("/api/demand", demandRoutes);

connectDb();

app.listen(process.env.PORT, () => {
  console.log("Server running on port 4000");
});
