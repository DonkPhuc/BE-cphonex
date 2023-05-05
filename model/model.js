const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
  favorite: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
});

const productsSchema = new mongoose.Schema({
  products: [
    {
      imageLink: { type: String },
      name: { type: String },
      priceRRP: { type: Number },
      description: { type: String },
      rated: { type: Number },
      favorite: { type: Boolean },
      quality: { type: Number },
      discount: { type: Number },
      imageDetail: [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
      ],
    },

    ,
  ],
});

let Customers = mongoose.model("customer", customersSchema);
let Products = mongoose.model("product", productsSchema);

module.exports = { Customers, Products };
