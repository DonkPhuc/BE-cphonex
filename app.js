const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const customersRoute = require("./routes/customers");
const productsRoute = require("./routes/products");
const ratesRoute = require("./routes/rates");
const ordersRoute = require("./routes/orders");

const port = 9999;
const portUrl = "https://cphonex-be.onrender.com";

dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.URL_LDK,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

app.use("/v1/api", customersRoute);
app.use("/v1/api", productsRoute);
app.use("/v1/api", ratesRoute);
app.use("/v1/api", ordersRoute);

app.listen(port, () => {
  console.log(`Server is running in ${portUrl}`);
});
