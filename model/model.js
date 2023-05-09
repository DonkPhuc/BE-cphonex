const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    },
  ],
  favorite: [],
});

const productsSchema = new mongoose.Schema({
  imageLink: { type: String, required: true },
  name: { type: String, required: true },
  priceRRP: { type: Number, required: true },
  quality: { type: Number, required: true },
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

let Customers = mongoose.model("Customer", customersSchema);
let Products = mongoose.model("Product", productsSchema);

module.exports = { Customers, Products };
