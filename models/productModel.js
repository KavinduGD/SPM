const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  year: String,
  month: String,
  count: Number,
});

const productSchema = new mongoose.Schema(
  {
    productId: { type: String, required: [true, "Please enter product Id"] },
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
    averageOrder: {
      type: Number,
    },
    currentStock: {
      type: Number,
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
    },
    sales: [salesSchema],
    manufacture: {
      type: String,
      required: [true, "Please enter product Manufacture"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
