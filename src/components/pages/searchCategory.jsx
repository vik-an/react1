import { useParams } from "react-router-dom";
import React from "react";

const SearchCategory = () => {
  const { category } = useParams();
  return <div>CATEGORY {category}</div>;
};
export default SearchCategory;
