const { Customers } = require("../model/model");

const customersController = {
  addCustomer: async (req, res) => {
    try {
      const oldCustomer = await Customers.find({
        username: req.body.username,
      });
      const newAccount = new Customers(req.body);
      if (oldCustomer.length !== 1) {
        const savedNewAccount = await newAccount.save();
        res.status(200).json(savedNewAccount);
      } else {
        res.json("exists account");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllCustomers: async (req, res) => {
    try {
      const customers = await Customers.find();
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getCustomer: async (req, res) => {
    try {
      const customers = await Customers.find({ username: req.params.username });
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateCustomer: async (req, res) => {
    try {
      const customers = await Customers.find({ username: req.params.username });
      console.log(customers[0].password);
      await customers.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!", customers);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteCustomer: async (req, res) => {
    try {
      // await Book.updateMany({ author: req.params.id }, { author: null });
      await Customers.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = customersController;
