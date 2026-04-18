import React from "react";
import { Link } from "react-router";
import "./cards.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../new RTK/slices/cart";

export default function CartCard({ product }) {
  let dispatch = useDispatch();

  return (
    <Link
      to={`/productDetails/${product.id}`}
      className="product position-relative col-12 col-md-5 col-lg-3 ">
      <div className="w-75">
        <img src={product.thumbnail} alt="" className="img-fluid" />
      </div>
      <h2>{product.title}</h2>
      {/* {product.sale ? (<p className="position-absolute top-0 end-0 bg-danger p-1 rounded text-white text-sm">sale</p>) : (null)} */}
      {product.discountPercentage && (
        <p className="position-absolute top-0 end-0 bg-danger p-1 rounded text-white text-sm">
          sale
        </p>
      )}
      <div className="categoryPriceAndcount">
        <p className="main-bg-color rounded p-1 text-white fs-6 ">
          {" "}
          {product.category}{" "}
        </p>
        <p className="text-success fw-bold">{product.price}$</p>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-3">
        <button className="btn btn-outline-warning">+</button>
        <p className="main-color fw-bold">{product.quantity}</p>
        <button className="btn btn-outline-danger ">-</button>
      </div>
      <div className="w-100 d-flex gap-3 align-items-center justify-content-center ">
        <button
          className="btn btn-outline-danger"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            dispatch(removeFromCart(product));
          }}>
          remove From Cart
        </button>
      </div>
    </Link>
  );
}
