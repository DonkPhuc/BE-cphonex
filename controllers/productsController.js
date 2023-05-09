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
      const customer = await Customers.find({ username: req.params.username });
      const cart = customer[0].cart;

      cart.push(req.body._id);
      await customer[0].save();

      res.json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteProductOnCart: async (req, res) => {
    try {
      const customer = await Customers.find({ username: req.params.username });
      const cart = customer[0].cart;

      // await cart.findByIdAndDelete(req.params.id);
      // await customer[0].save();

      res.json("delete successfully");
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
      const product = await Products.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body }
      );
      if (product !== null) {
        product && res.status(200).json("Updated successfully!");
      } else res.json("doesn't exists this prod");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Products.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = productsController;
