const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  phoneNo: { type: Number },
  email: { type: Number },
  role: { type: String, default: "customer" },
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
  imageDetail: [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
  ],
  stock: { type: Number, default: 100 },
  rate: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rate" }],
});

const rateSchema = new mongoose.Schema({
  rate: [
    {
      username: { type: String, required: true },
      description: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
      value: { type: Number, default: 5 },
    },
  ],
});

const orderNoSchema = new mongoose.Schema({
  orderNumber: { type: Number, required: true, unique: true },
  orderDelivery: { type: String },
  customerName: { type: String },
  orderAddress: { type: String },
  orderTotal: { type: Number },
  orderDate: { type: Date, default: Date.now },
  status: { type: String },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

let Customer = mongoose.model("Customer", customersSchema);
let Product = mongoose.model("Product", productsSchema);
let OrderNo = mongoose.model("OrderNo", orderNoSchema);
let Rate = mongoose.model("Rate", rateSchema);

module.exports = { Customer, Product, Rate, OrderNo };
