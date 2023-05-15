const { Product, Customer, OrderNo } = require("../model/model");

const ordersController = {
  addOrder: async (req, res) => {
    try {
      const newOrder = new OrderNo(req.body);
      const savedNewOrder = await newOrder.save();
      res.status(200).json(savedNewOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllOrders: async (req, res) => {
    try {
      const orders = await OrderNo.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getOrder: async (req, res) => {
    try {
      const order = await OrderNo.findById(req.params.id).populate("items");
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateOrder: async (req, res) => {
    try {
      const order = await OrderNo.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body }
      );
      if (order !== null) {
        order && res.status(200).json("Updated successfully!");
      } else res.json("doesn't exists this order");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteOrder: async (req, res) => {
    try {
      await OrderNo.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = ordersController;
