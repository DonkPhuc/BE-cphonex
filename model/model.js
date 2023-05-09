const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
});

const customersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  cart: [cartItemSchema],
  favorite: [],
});

const productsSchema = new mongoose.Schema({
  imageLink: { type: String, required: true },
  name: { type: String, required: true },
  priceRRP: { type: Number, required: true },
  type: { type: String, required: true },
  discount: { type: Number },
  description: { type: String },
  favorite: { type: Boolean },
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
