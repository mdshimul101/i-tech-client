import React from "react";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
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
    <div>
      <h2>Available products : {allProduct.length}</h2>
    </div>
  );
};

export default Products;
