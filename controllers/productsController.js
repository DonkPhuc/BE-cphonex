const { Products } = require("../model/model");

const productsController = {
  addProduct: async (req, res) => {
    try {
      const newProduct = new Products(req.body);
      console.log(req.body);
      const savedNewProduct = await newProduct.save();
      res.status(200).json(savedNewProduct);
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

  //   getCustomer: async (req, res) => {
  //     try {
  //       const customers = await Customers.find({ username: req.params.username });
  //       res.status(200).json(customers);
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   },

  //   updateCustomer: async (req, res) => {
  //     try {
  //       const customers = await Customers.find({ username: req.params.username });
  //       console.log(customers[0].password);
  //       await customers.updateOne({ $set: req.body });
  //       res.status(200).json("Updated successfully!", customers);
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   },

  //   deleteCustomer: async (req, res) => {
  //     try {
  //       // await Book.updateMany({ author: req.params.id }, { author: null });
  //       await Customers.findByIdAndDelete(req.params.id);
  //       res.status(200).json("Deleted successfully!");
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   },
};

module.exports = productsController;
