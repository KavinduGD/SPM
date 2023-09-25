const Product = require("../models/productModel");
const regression = require("regression");
const { DataPoint } = require("../models/productModel");

const getPrediction = async (req, res) => {
  try {
    // Step 1: Retrieve the product data
    const product = await Product.findById(req.params.id);
    const sales = product.sales;

    // Step 2: Prepare the data for regression analysis
    // Convert the sales data into an array of [monthIndex, salesCount] pairs
    const salesData = sales.map((sale, index) => [index, sale.count]);

    // Step 3: Perform regression analysis
    const result = regression.linear(salesData); // You can use other regression models as needed

    // Step 4: Make a prediction for the next month
    const nextMonthIndex = sales.length; // Index for the next month
    const nextMonthPrediction = result.predict(nextMonthIndex)[1]; // Predicted sales for the next month

    // Send the prediction as a response
    res.json({ prediction: nextMonthPrediction });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getPrediction };
