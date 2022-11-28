import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Product from "../Product/Product";

import BookingModal from "../BookingModal/BookingModal";
import Loading from "../../Shared/Loading/Loading";
const Products = () => {
  const products = useLoaderData();
  const [singleProduct, setSingleProduct] = useState(null);
  // console.log(products.categoryName);
  // console.log(products);

  const { data: allProduct = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        `http://localhost:5000/products?categoryName=${products.categoryName}`
      ).then((res) => res.json()),
  });
  // console.log(allProduct);
  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-sky-500 text-2xl font-semibold text-center p-3 border lg:w-1/3 mx-auto lg:rounded-full border-sky-500">
        Available products : {allProduct.length}
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-6">
        {allProduct.map((product) => (
          <Product
            key={product.id}
            product={product}
            setSingleProduct={setSingleProduct}
          ></Product>
        ))}
      </div>
      {singleProduct && (
        <BookingModal
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        ></BookingModal>
      )}
    </div>
  );
};

export default Products;
