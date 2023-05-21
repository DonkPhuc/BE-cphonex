const { Product, Customer, Rate } = require("../model/model");

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
      const customer = await Customer.find({
        username: req.params.username,
      }).populate("cart");
      const cart = customer[0].cart;
      const productExist = cart.find(
        (product) => product._id.toString() === req.body._id.toString()
      );

      if (productExist === undefined || !productExist) {
        cart.push(req.body._id);
        await customer[0].save();
        res.status(200).json("successfully");
      } else {
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
      const productExist = cart.findIndex(
        (product) => product._id.toString() === req.params.id.toString()
      );

      if (productExist > -1) {
        cart.splice(0, 1);
        await customer[0].save();
        res.status(200).json("successfully");
      } else {
        res.json("not exist");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  addProductToFavorite: async (req, res) => {
    try {
      const customer = await Customer.find({
        username: req.params.username,
      });
      const favorite = customer[0].favorite;
      const productExist = favorite.find(
        (product) => product._id.toString() === req.body._id.toString()
      );

      if (productExist === undefined || !productExist) {
        favorite.push(req.body._id);
        await customer[0].save();
        res.status(200).json("successfully");
      } else {
        res.json("product existed");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteProductOnFavorite: async (req, res) => {
    try {
      const customer = await Customer.find({ username: req.params.username });
      const favorite = customer[0].favorite;
      const productExist = favorite.findIndex(
        (product) => product._id.toString() === req.params.id.toString()
      );

      if (productExist > -1) {
        favorite.splice(0, 1);
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
      const products = await Product.find().populate("rate");
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).populate("rate");
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getSearchProduct: async (req, res) => {
    try {
      const regex = new RegExp(req.params.name, "i");
      const result = await Product.find({ name: regex });
      res.status(200).json(result);
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

  addRateToProduct: async (req, res) => {
    try {
      const newRate = new Rate(req.body);
      const product = await Product.findById(req.params.id);
      const rate = product.rate;
      rate.push(newRate._id);
      newRate.save();
      product.save();
      res.status(200).json(product.rate);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = productsController;
