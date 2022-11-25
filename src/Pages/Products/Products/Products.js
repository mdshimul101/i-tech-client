import React from "react";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Product from "../Product/Product";
const Products = () => {
  const products = useLoaderData();

  console.log(products.categoryName);

  const { data: allProduct = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        `http://localhost:5000/products?categoryName=${products.categoryName}`
      ).then((res) => res.json()),
  });
  console.log(allProduct);
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-sky-500 text-2xl font-semibold text-center py-5">
        Available products : {allProduct.length}
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-6">
        {allProduct.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
