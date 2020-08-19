import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/UserActions";

const ProductsAdmin = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  useEffect(() => {
    return () => {};
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct(name, image, category, price, countInStock, description)
    );
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form__container">
          <li>
            <h2>Create Product</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              value={image}
              name="image"
              onChange={(e) => setImage(e.target.value)}
            ></input>
            {/*     <input type="file" onChange={uploadFileHandler}></input>
                      {uploading && <div>Uploading...</div>} */}
          </li>
          <li>
            <label htmlFor="category">Category</label>
            <input
              type="text"
              value={category}
              id="category"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="countInStock">CountInStock</label>
            <input
              type="text"
              id="countInStock"
              value={countInStock}
              name="countInStock"
              onChange={(e) => setcountInStock(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={description}
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </li>
          <li>
            <button type="submit" className="form__submit">
              {id ? "Update" : "Create"}
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default ProductsAdmin;
