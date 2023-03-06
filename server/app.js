const express = require("express");
const app = express();
const path = require("path");
const { getProducts, getSingleProduct } = require("./db/products");
app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/static", express.static(path.join(__dirname, "../static")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../static/index.html"))
);

app.use("/api/auth", require("./api/auth"));

app.get("/api/products", async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

app.get("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  const singleProduct = await getSingleProduct(id);
  res.send(singleProduct);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;
