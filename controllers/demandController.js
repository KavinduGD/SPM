const Product = require("../models/productModel");
const regression = require("regression");
const { DataPoint } = require("../models/productModel");
const DemandNotice = require("../models/demandNoticeModel");
const {
  topDealProducts,
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxRevenue,
  menWomenBar,
  ageData,
  pieData,
} = require("../data/demand/demandData");

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

    // Step 5: Get the name of the predicted month
    const predictedMonth = getMonthName(nextMonthIndex % 12);

    // Send the prediction and predicted month as a response
    res.json({ prediction: nextMonthPrediction, predictedMonth });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Helper function to get the name of the month based on its index
function getMonthName(monthIndex) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthIndex];
}

const sendDashboardData = (req, res) => {
  data = {
    topDealProducts,
    chartBoxUser,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxConversion,
    barChartBoxRevenue,
    menWomenBar,
    ageData,
    pieData,
  };
  res.json(data);
};

const getAllDemandNotices = async (req, res) => {
  try {
    const demandNotices = await DemandNotice.find({});
    res.json(demandNotices);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createDemandNotice = async (req, res) => {
  try {
    const demandNotice = new DemandNotice({
      productId: req.body.productId,
      name: req.body.name,
      type: req.body.type,
      amount: req.body.amount,
      justification: req.body.justification,
    });
    const newDemandNotice = await demandNotice.save();
    res.json(newDemandNotice);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server Error" });
  }
};

const getDemandNoticeById = async (req, res) => {
  try {
    const demandNotice = await DemandNotice.findById(req.params.id);
    res.json(demandNotice);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateDemandNotice = async (req, res) => {
  try {
    const demandNoticeId = req.params.id;
    const updatedFields = {
      productId: req.body.productId,
      name: req.body.name,
      type: req.body.type,
      amount: req.body.amount,
      justification: req.body.justification,
    };
    const updatedDemandNotice = await DemandNotice.findByIdAndUpdate(
      demandNoticeId,
      updatedFields,
      { new: true }
    );
    res.json(updatedDemandNotice);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteDemandNotice = async (req, res) => {
  try {
    const demandNoticeId = req.params.id;
    await DemandNotice.findByIdAndDelete(demandNoticeId);
    res.json({ message: "Demand Notice deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getPredictionByRealProductId = async (req, res) => {
  try {
    // Step 1: Retrieve the product data by productId
    const productId = req.params.id;
    const product = await Product.findOne({ productId });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const sales = product.sales;

    // Step 2: Prepare the data for regression analysis
    // Convert the sales data into an array of [monthIndex, salesCount] pairs
    const salesData = sales.map((sale, index) => [index, sale.count]);

    // Step 3: Perform regression analysis
    const result = regression.linear(salesData); // You can use other regression models as needed

    // Step 4: Make a prediction for the next month
    const nextMonthIndex = sales.length; // Index for the next month
    const nextMonthPrediction = result.predict(nextMonthIndex)[1]; // Predicted sales for the next month

    // Step 5: Get the name of the predicted month
    const predictedMonth = getMonthName(nextMonthIndex % 12);

    // Send the prediction and predicted month as a response
    res.json({ prediction: nextMonthPrediction, predictedMonth });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  getPrediction,
  sendDashboardData,
  getAllDemandNotices,
  createDemandNotice,
  getDemandNoticeById,
  updateDemandNotice,
  deleteDemandNotice,
  getPredictionByRealProductId,
};
