const { Customer } = require("../model/model");

const customersController = {
  addCustomer: async (req, res) => {
    try {
      const oldCustomer = await Customer.find({
        username: req.body.username,
      });
      const newAccount = new Customer(req.body);
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
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getCustomer: async (req, res) => {
    try {
      const customers = await Customer.find({
        username: req.params.username,
      }).populate("cart");

      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateCustomer: async (req, res) => {
    try {
      const customers = await Customer.findOneAndUpdate(
        { username: req.params.username },
        { $set: { password: req.body.password } }
      );
      if (customers !== null) {
        customers && res.status(200).json("Updated successfully!");
      } else res.json("doesn't exists this account");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteCustomer: async (req, res) => {
    try {
      await Customer.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = customersController;
