const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  username: { type: String, required: true },
  value: { type: Number, default: 5 },
  description: { type: String },
  phoneNo: { type: String },
});

const productsSchema = new mongoose.Schema({
  imageLink: { type: String, required: true },
  priceRRP: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  create: { type: Date, default: Date.now },
  stock: { type: Number, default: 100 },
  description: { type: String },
  discount: { type: Number },
  imageDetail: [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
  ],
  rate: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rate" }],
});

const cartSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  type: { type: String },
  name: { type: String },
  priceRRP: { type: Number },
  discount: { type: Number },
  imageLink: { type: String },
  quantity: { type: Number, default: 1 },
});

const customersSchema = new mongoose.Schema({
  userFullName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  create: { type: Date, default: Date.now },
  phoneNo: { type: String },
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrderNo" }],
  role: { type: String, default: "customer" },
  cart: [cartSchema],
});

const orderNoSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true },
  orderTotal: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  customerUsername: { type: String },
  orderDelivery: { type: String },
  customerName: { type: String },
  orderAddress: { type: String },
  status: { type: String },
  items: [cartSchema],
});

let Customer = mongoose.model("Customer", customersSchema);
let Product = mongoose.model("Product", productsSchema);
let OrderNo = mongoose.model("OrderNo", orderNoSchema);
let Rate = mongoose.model("Rate", rateSchema);

module.exports = { Customer, Product, Rate, OrderNo };
