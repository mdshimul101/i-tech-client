import React from "react";

import { useQuery } from "@tanstack/react-query";
import Category from "../Category/Category/Category";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetch("categories.json").then((res) => res.json()),
  });
  console.log(categories);

  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-center text-sky-500 font-semibold text-2xl">
        Explore Categories
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
