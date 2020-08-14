const express = require("express");
const data = require("./Data");
const dotenv = require("dotenv");
const config = require("./config");
const mongoose = require("mongoose");

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  //Return user clicked product
  const product = data.products.find((x) => x._id === productId);

  if (product) res.send(product);
  else res.status(404).send({ msg: "Product Not Found." });
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
