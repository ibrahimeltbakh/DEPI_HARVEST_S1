import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProduct } from "../../new RTK/slices/product";
import Loading from "./../Loading";
import Error from "./../Error";
import { addToCart } from "../../new RTK/slices/cart";
import useGetProduct from "../../Hooks/products/useGetProduct";

export default function ProductDetailsCard() {
  const { id } = useParams();
  // let {
  //   item: product,
  //   isLoading,
  //   isError,
  // } = useSelector((state) => state.product);
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProduct(id));
  // }, [dispatch, id]);

  // if (isLoading) return <Loading />;
  // if (isError) return <Error message={isError} />;

  let { data: product, isLoading, isError, error } = useGetProduct(id);
  const originalPrice = (
    product?.price /
    (1 - product?.discountPercentage / 100)
  ).toFixed(2);
  if (isLoading) return <Loading />;
  if (isError) return <Error message={error} />;

  return (
    <div className=" d-flex align-items-center justify-content-center ">
      <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden w-50 ">
        <div className="position-relative">
          {product.discountPercentage > 0 && (
            <span
              className="badge bg-danger position-absolute top-0 start-0 m-3 shadow-sm"
              style={{ zIndex: 1 }}>
              {product.discountPercentage}% OFF
            </span>
          )}

          <div
            className="bg-light p-4 d-flex align-items-center justify-content-center"
            style={{ height: "220px" }}>
            <img
              src={product.thumbnail}
              className="card-img-top img-fluid"
              alt={product.title}
              style={{ maxHeight: "100%", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="card-body d-flex flex-column p-3">
          <div className="d-flex justify-content-between mb-2">
            <span className="text-secondary small fw-bold text-uppercase">
              {product.category}
            </span>
            <span className="text-muted small">{product.brand}</span>
          </div>

          <h5
            className="card-title mb-2 fw-bold text-dark text-truncate"
            title={product.title}>
            {product.title}
          </h5>

          <p
            className="card-text text-secondary small mb-3"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "40px",
            }}>
            {product.description}
          </p>

          <div className="d-flex align-items-center mb-3">
            <div className="text-warning me-2">
              <i className="bi bi-star-fill small"></i> ⭐
            </div>
            <span className="fw-bold small">{product.rating}</span>
            <span className="text-secondary small ms-1">
              ({product.reviews?.length} reviews)
            </span>
          </div>

          <div className="mt-auto">
            <div className="d-flex align-items-baseline gap-2">
              <h4 className="fw-bold main-color mb-0">${product.price}</h4>
              {product.discountPercentage > 0 && (
                <span className="text-secondary text-decoration-line-through small">
                  ${originalPrice}
                </span>
              )}
            </div>

            <div
              className={`small mt-1 ${product.stock > 0 ? "text-success" : "text-danger"}`}>
              {product.stock > 0
                ? `In Stock (${product.stock})`
                : "Out of Stock"}
            </div>
          </div>
        </div>

        <div className="p-3 pt-0">
          <button
            className="btn btn-success main-bg-color w-100 fw-bold border-0 py-2 d-flex align-items-center justify-content-center gap-2 "
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              dispatch(addToCart(product));
            }}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
