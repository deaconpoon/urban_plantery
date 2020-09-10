"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _OrderModel = _interopRequireDefault(require("../models/OrderModel"));

var _Util = require("../Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/", _Util.isAuth, async (req, res) => {
  const orders = await _OrderModel.default.find({}).populate("user");
  res.send(orders);
});
router.get("/mine", _Util.isAuth, async (req, res) => {
  const orders = await _OrderModel.default.find({
    user: req.user._id
  });
  res.send(orders);
});
router.get("/:id", _Util.isAuth, async (req, res) => {
  const order = await _OrderModel.default.findOne({
    _id: req.params.id
  });

  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order Not Found.");
  }
});
router.delete("/:id", _Util.isAuth, _Util.isAdmin, async (req, res) => {
  const order = await _OrderModel.default.findOne({
    _id: req.params.id
  });

  if (order) {
    const deletedOrder = await order.remove();
    res.send(deletedOrder);
  } else {
    res.status(404).send("Order Not Found.");
  }
});
router.post("/", _Util.isAuth, async (req, res) => {
  const newOrder = new _OrderModel.default({
    orderItems: req.body.orderItems,
    user: req.user._id,
    shipping: req.body.shipping,
    payment: req.body.payment,
    itemsPrice: req.body.itemsPrice,
    taxPrice: req.body.taxPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice
  });
  const newOrderCreated = await newOrder.save();
  res.status(201).send({
    message: "New Order Created",
    data: newOrderCreated
  });
});
router.put("/:id/pay", _Util.isAuth, async (req, res) => {
  const order = await _OrderModel.default.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.payment = {
      paymentMethod: "paypal",
      paymentResult: {
        payerID: req.body.payerID,
        orderID: req.body.orderID,
        paymentID: req.body.paymentID
      }
    };
    const updatedOrder = await order.save();
    res.send({
      message: "Order Paid.",
      order: updatedOrder
    });
  } else {
    res.status(404).send({
      message: "Order not found."
    });
  }
});
var _default = router;
exports.default = _default;