const { Product, Customer, Rate } = require("../model/model");

const ratesController = {
  getAllRates: async (req, res) => {
    try {
      const rate = await Rate.find();
      res.status(200).json(rate);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateRate: async (req, res) => {
    try {
      const rate = await Rate.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body }
      );
      if (rate !== null) {
        rate && res.status(200).json("Updated successfully!");
      } else res.json("doesn't exists this prod");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteRate: async (req, res) => {
    try {
      await Rate.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = ratesController;
