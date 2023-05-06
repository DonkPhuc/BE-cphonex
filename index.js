const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

const customersRoute = require("./routes/customers");
const productsRoute = require("./routes/products");

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

app.use("/v1", customersRoute);
app.use("/v1", productsRoute);

app.listen(3000, () => {
  console.log("Server is running...");
});
