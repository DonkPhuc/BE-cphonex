const express = require("express");
const cors = require('cors');
const app = express();

const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://duykhanh:gBi90vFntGfXujZi@cphonex.ohu3h1s.mongodb.net/?retryWrites=true&w=majority";
const dbName = "cphonex";

app.use(cors());

app.get("/", (req, res) => {
  let result = "...";
  MongoClient.connect(url).then(async (e) => {
    const db = e.db(dbName);
    db.collection("customer")
      .find({})
      .toArray((err, docs) => {
        if (docs !== undefined) {
          result = docs;
        }
      });
  });
  res.send(result);
});

app.post("/create/user", (req, res) => {
  MongoClient.connect(url, { useUnifiedTopology: true }).then(async (e) => {
    const db = e.db(dbName);
    await db.collection("customer").insertOne({
      username: "admin2",
      password: "admin2",
    });
    e.close();
  });
  res.send("created new user");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
