const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getRealProductById,
} = require("../controllers/productController");
//get
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/productId/:id", getRealProductById);

router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

//get

module.exports = router;
