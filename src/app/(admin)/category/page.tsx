import React from "react";
import Header from "@/(components)/Header";
import { categoryData } from "./data/categoryData";
import CategoryCard from "./components/CategoryCard";
import AddCategory from "./components/AddCategory";

const Category = () => {
  return (
    <>
      <Header name="Category" />
      <AddCategory />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {categoryData.length > 0 ? (
          categoryData.map((item, index) => (
            <CategoryCard
              key={index}
              icon={item.icon}
              text={item.text}
              value={item.value}
              color={item.color}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Category;
