import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  let cartProduct = useSelector((state) => state.cart);

  return (
    <nav className="p-2 mb-3">
      <NavLink to="">Home</NavLink>
      <NavLink to="shop">Shop</NavLink>
      <NavLink to="cart">Cart-{cartProduct.length}</NavLink>
      <NavLink to="login">Login</NavLink>
    </nav>
  );
}
