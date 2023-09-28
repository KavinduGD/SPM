const Product = require("../models/productModel");

//getAllProducts
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//getProductById
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//createProduct
const createProduct = async (req, res) => {
  try {
    const product = new Product({
      productId: req.body.productId,
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      averageOrder: req.body.averageOrder,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
      rating: req.body.rating,
      sales: req.body.sales,
      manufacture: req.body.manufacture,
      currentStock: req.body.currentStock,
    });
    const newProduct = await product.save();
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//updateProduct
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedFields = {
      productId: req.body.productId,
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      averageOrder: req.body.averageOrder,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
      rating: req.body.rating,
      sales: req.body.sales,
      manufacture: req.body.manufacture,
      currentStock: req.body.currentStock,
    };

    // Find the product by ID and update it
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedFields, {
      new: true, // To return the updated product
      runValidators: true, // To run validation on update
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//deleteProduct
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: "Product removed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getRealProductById = async (req, res) => {
  productId = req.params.id;

  try {
    const product = await Product.findOne({ productId: productId });
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getRealProductById,
};
