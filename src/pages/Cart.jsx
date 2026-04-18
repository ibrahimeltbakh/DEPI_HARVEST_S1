import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./../components/Cards/ProductCard";
import CartCard from "../components/Cards/CartCard";
import { v4 as uuidv4 } from "uuid";

export default function Cart() {
  let cartProducts = useSelector((state) => state.cart);

  return (
    <>
      {cartProducts.length > 0 ? (
        <div>
          <h1>Welcome To Your Cart Products</h1>
          <div className="row gap-1 justify-content-center align-items-center p-3">
            {cartProducts.map((p) => (
              <CartCard key={uuidv4()} product={p} />
            ))}
          </div>
        </div>
      ) : (
        <h2 className="display-2 text-danger"> No Products in Your Cart</h2>
      )}
    </>
  );
}
