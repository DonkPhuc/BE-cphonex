const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const productsSchema = new mongoose.Schema({
  imageLink: { type: String, required: true },
  priceRRP: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  discount: { type: Number },
  description: { type: String },
  rated: { type: Number },
  imageDetail: [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
  ],
});

let Customer = mongoose.model("Customer", customersSchema);
let Product = mongoose.model("Product", productsSchema);

module.exports = { Customer, Product };
