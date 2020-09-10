"use strict";

var _express = _interopRequireDefault(require("express"));

var _Data = _interopRequireDefault(require("./Data"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _config = _interopRequireDefault(require("./config"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _UserRoute = _interopRequireDefault(require("./routes/UserRoute"));

var _ProductRoute = _interopRequireDefault(require("./routes/ProductRoute"));

var _OrderRoute = _interopRequireDefault(require("./routes/OrderRoute"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const PORT = process.env.PORT || 5000;
const mongodbUrl = _config.default.MONGODB_URL;

_mongoose.default.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use("/api/users", _UserRoute.default);
app.use("/api/products", _ProductRoute.default);
app.use("/api/orders", _OrderRoute.default);
app.get("/api/config/paypal", (req, res) => {
  res.send(_config.default.PAYPAL_CLIENT_ID);
});

if (process.env.NODE_ENV === "production") {
  app.use(_express.default.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(_path.path.resolve(_dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});