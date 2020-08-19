import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  countInStock: { type: String, required: true },
  description: { type: String, required: true },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
