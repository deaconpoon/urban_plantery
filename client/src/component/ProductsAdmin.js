import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  saveProduct,
  listProducts,
  deleteProduct,
} from "../actions/ProductActions";
import arrow from "../asset/arrow.svg";
import { model } from "mongoose";

const ProductsAdmin = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  useEffect(() => {
    const arrow = document.querySelector(".form__create--arrow");

    modalVisible ? arrow.classList.remove("flip") : arrow.classList.add("flip");
  }, [modalVisible]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);

    setCategory(product.category);
    setCountInStock(product.countInStock);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      saveProduct({
        _id: id,
        name,
        image,
        category,
        price,
        countInStock,
        description,
      })
    );
  };

  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
  };

  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setUploading(true);
    axios
      .post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };

  return (
    <div>
      <div className="product__header">
        <button className="form__create" onClick={() => openModal({})}>
          <h2 className="form__title form__create--btn">Create Product</h2>

          <img
            alt="arrow"
            src={arrow}
            className="form__create--arrow flip"
          ></img>
        </button>
      </div>
      {modalVisible && (
        <div className="form__create__body">
          <form onSubmit={submitHandler}>
            <div>
              <li className="form--entry">
                <label htmlFor="name">Name</label>
                <input
                  className="form--input"
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li className="form--entry">
                <label htmlFor="image">Image</label>
                <input
                  className="form--input"
                  type="text"
                  id="image"
                  value={image}
                  name="image"
                  onChange={(e) => setImage(e.target.value)}
                ></input>
                <input type="file" onChange={uploadFileHandler}></input>
                {uploading && <div>Uploading...</div>}
              </li>
              <li className="form--entry">
                <label htmlFor="category">Category</label>
                <input
                  className="form--input"
                  type="text"
                  value={category}
                  id="category"
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </li>
              <li className="form--entry">
                <label htmlFor="price">Price</label>
                <input
                  className="form--input"
                  type="text"
                  id="price"
                  value={price}
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </li>
              <li className="form--entry">
                <label htmlFor="countInStock">CountInStock</label>
                <input
                  className="form--input"
                  type="text"
                  id="countInStock"
                  value={countInStock}
                  name="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}
                ></input>
              </li>
              <li className="form--entry">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form--input"
                  name="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </li>
              <li>
                <button type="submit" className="form__update">
                  {id ? "Update" : "Create"}
                </button>
              </li>
              <li>
                <button
                  className="form__back"
                  type="button"
                  onClick={() => setModalVisible(false)}
                >
                  Back
                </button>
              </li>
            </div>
          </form>
        </div>
      )}

      <div className="product-list">
        <h3 className="form__title">Products</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Count In Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.countInStock}</td>
                <td>
                  <button className="button" onClick={() => openModal(product)}>
                    Edit
                  </button>{" "}
                  <button
                    className="button"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsAdmin;
