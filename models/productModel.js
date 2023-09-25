const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  year: String,
  month: String,
  count: Number,
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  countInStock: {
    type: Number,
    required: [true, "Please enter product countInStock"],
  },
  imageUrl: {
    type: String,
    required: [true, "Please enter product imageUrl"],
  },
  category: {
    type: String,
    required: [true, "Please enter product category"],
  },
  rating: {
    type: Number,
    required: [true, "Please enter product rating"],
  },
  sales: [salesSchema],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
