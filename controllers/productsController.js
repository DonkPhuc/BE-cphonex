const { Products, Customers } = require("../model/model");

const productsController = {
  addProduct: async (req, res) => {
    try {
      const newProduct = new Products(req.body);
      const savedNewProduct = await newProduct.save();
      res.status(200).json(savedNewProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  addProductToCart: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      const customer = await Customers.find({ username: req.params.username });
      const newProduct = new Products(product);
      const savedNewProduct = await newProduct.save();
      console.log(savedNewProduct);
      // await customer.updateOne({ $push: { cart: savedNewProduct._id } });
      res.status(200).json("product");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Products.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateProduct: async (req, res) => {
    try {
      const product = await Products.find({ _id: req.params.id });
      console.log(product);
      // await product.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Customers.updateMany({ cart: req.params.id }, { cart: null });
      await Products.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = productsController;
