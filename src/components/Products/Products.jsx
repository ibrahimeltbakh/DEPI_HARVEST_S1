import React, { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";
import "./products.css";
import { ScaleLoader } from "react-spinners";
import Loading from "../Loading";
import Error from "../Error";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../new RTK/slices/products";
import { v4 as uuidv4 } from "uuid";
import useGetProducts from "../../Hooks/products/useProducts";

export default function Products() {
  // let [products, setProducts] = useState();
  // let [loading, setLoading] = useState(true);
  // let [error, setError] = useState(false);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       let res = await fetch("https://dummyjson.com/products");
  //       let data = await res.json();
  //       setProducts(data.products);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error(err);
  //       setLoading(false);
  //       setError(true);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <Error />;
  // }
  // *************** using RTK **************
  // let {
  //   items: products,
  //   isLoading,
  //   isError,
  // } = useSelector((state) => state.products);

  // let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());

  // }, [dispatch]);
  // if (isLoading) return <Loading />;
  // if (isError) return <Error message={isError} />;

  // *************** using React Query **************
  let { data: products, isLoading, isError, error } = useGetProducts();
  if (isLoading) return <Loading />;
  if (isError) return <Error message={error} />;
  return (
    <div className="row align-items-center justify-content-center gap-2">
      {products.map((product) => (
        <ProductCard key={uuidv4()} product={product} />
      ))}
    </div>
  );
}
