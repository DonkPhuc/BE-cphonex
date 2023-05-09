const { Product, Customer } = require("../model/model");

const productsController = {
  addProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const savedNewProduct = await newProduct.save();
      res.status(200).json(savedNewProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  addProductToCart: async (req, res) => {
    try {
      const customer = await Customer.find({ username: req.params.username });
      const cart = customer[0].cart;
      const productExist = cart.find(
        (product) => product._id.toString() === req.body._id.toString()
      );

      if (!productExist) {
        cart.push(req.body._id);
        await customer[0].save();
        res.status(200).json("successfully");
      } else {
        productExist.quantity++;
        await customer[0].save();
        console.log(productExist.quantity);
        res.json("product existed");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteProductOnCart: async (req, res) => {
    try {
      const customer = await Customer.find({ username: req.params.username });
      const cart = customer[0].cart;
      const productExist = cart.find(
        (product) => product._id.toString() === req.params.id.toString()
      );

      if (productExist) {
        console.log(req.params.id);
        console.log(productExist);
        await productExist.remove();
        await customer[0].save();
        res.status(200).json("successfully");
      } else {
        res.json("not exist");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateProduct: async (req, res) => {
    try {
      const product = await Product.findOneAndUpdate(
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
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = productsController;
