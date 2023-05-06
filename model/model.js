const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Products" }],
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Products" }],
});

const productsSchema = new mongoose.Schema({
  imageLink: { type: String, required: true },
  name: { type: String, required: true },
  priceRRP: { type: Number, required: true },
  description: { type: String, required: true },
  rated: { type: Number, required: true },
  favorite: { type: Boolean, required: true },
  quality: { type: Number, required: true },
  discount: { type: Number, required: true },
  type: { type: String, required: true },
  imageDetail: [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
  ],
});

let Customers = mongoose.model("customer", customersSchema);
let Products = mongoose.model("product", productsSchema);

module.exports = { Customers, Products };
