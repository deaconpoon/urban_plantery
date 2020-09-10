"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _ProductModel = _interopRequireDefault(require("../models/ProductModel"));

var _Util = require("../Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); //Searching


router.get("/", async (req, res) => {
  const category = req.query.category ? {
    category: req.query.category
  } : {};
  const searchKeyword = req.query.searchKeyword ? {
    name: {
      $regex: req.query.searchKeyword,
      $options: "i"
    }
  } : {};
  const sortOrder = req.query.sortOrder ? req.query.sortOrder === "lowest" ? {
    price: 1
  } : {
    price: -1
  } : {
    _id: -1
  };
  const products = await _ProductModel.default.find({ ...category,
    ...searchKeyword
  }).sort(sortOrder);
  res.send(products);
}); //Get individal product

router.get("/:id", async (req, res) => {
  const product = await _ProductModel.default.findOne({
    _id: req.params.id
  });

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({
      message: "Product Not Found."
    });
  }
}); //Update product list

router.put("/:id", _Util.isAuth, _Util.isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await _ProductModel.default.findById(productId);

  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updatedProduct = await product.save();

    if (updatedProduct) {
      return res.status(200).send({
        message: "Product Updated",
        data: updatedProduct
      });
    }
  }

  return res.status(500).send({
    message: " Error in Updating Product."
  });
}); //Get product list

router.get("/", async (req, res) => {
  const products = await _ProductModel.default.find({});
  res.send(products);
}); //Create new product
//add isAuth and isAdmin

router.post("/", async (req, res) => {
  const product = new _ProductModel.default({
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    price: req.body.price,
    countInStock: req.body.countInStock,
    description: req.body.description
  });
  const newProduct = await product.save();

  if (newProduct) {
    return res.status(201).send({
      message: "New Product Created",
      data: newProduct
    });
  }

  return res.status(500).send({
    message: "Error in Creating Product."
  });
});
router.delete("/:id", _Util.isAuth, _Util.isAdmin, async (req, res) => {
  const deletedProduct = await _ProductModel.default.findById(req.params.id);

  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({
      message: "Product Deleted"
    });
  } else {
    res.send("Error in Deletion.");
  }
});
var _default = router;
exports.default = _default;