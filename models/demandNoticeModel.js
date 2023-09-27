const mongoose = require("mongoose");

const demandNoticeSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: [true, "Please enter product Id"],
    ref: "Product",
  },
  name: {
    type: String,
    required: [true, "Please enter product name"],
    ref: "Product",
  },
  type: {
    type: String,
    enum: ["increase", "decrease"],
    required: [true, "Please enter product type"],
  },
  amount: {
    type: Number,
    required: [true, "Please enter product amount"],
  },
  justification: {
    type: String,
    required: [true, "Please enter product justification"],
  },
});

const Product = mongoose.model("DemandNotice", demandNoticeSchema);
module.exports = Product;
