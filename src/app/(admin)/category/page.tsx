"use client";
import React from "react";
import Header from "@/(components)/Header";
// import { categoryData } from "./data/categoryData";
import CategoryCard from "./components/CategoryCard";
import AddCategory from "./components/AddCategory";
import { useCategories } from "@/hooks/useCategories";
import { Category } from "@/types/category";

const Category = () => {
  const { data, isLoading, error } = useCategories();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories</p>;
  return (
    <>
      <Header name="Category" />
      <AddCategory />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data && data?.length > 0 ? (
          data?.map((item: Category, index) => (
            <CategoryCard
              key={index}
              icon={item.icon}
              text={item.name}
              value={"12"}
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
