"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0,
    required: true
  },
  countInStock: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const productModel = _mongoose.default.model("Product", productSchema);

var _default = productModel;
exports.default = _default;