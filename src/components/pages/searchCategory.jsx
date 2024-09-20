import { useParams } from "react-router-dom";
import React from "react";
import CategoryList from "../home/CategoryList";

const SearchCategory = () => {
  const { category } = useParams(CategoryList);
  return <div>CATEGORY {category}</div>;
};
export default SearchCategory;
