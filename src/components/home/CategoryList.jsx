import React from "react";
import styles from "./CategoryList.module.css";
import CategoryCard from "./CategoryCard.jsx";

const categories = [
  {
    name: "Cleaning",
    url: "https://img.icons8.com/?size=100&id=8088&format=png&color=000000",
    color: "purple",
  },
  {
    name: "Repair",
    url: "https://img.icons8.com/?size=100&id=59827&format=png&color=000000",
    color: "grey",
  },
  {
    name: "Painting",
    url: "https://img.icons8.com/?size=100&id=8141&format=png&color=000000",
    color: "green",
  },
  {
    name: "Shifting",
    url: "https://img.icons8.com/?size=100&id=7776&format=png&color=000000",
    color: "brown",
  },
  {
    name: "Plumping",
    url: "https://img.icons8.com/?size=100&id=24925&format=png&color=000000",
    color: "orange",
  },
  {
    name: "Electric",
    url: "https://img.icons8.com/?size=100&id=9094&format=png&color=000000",
    color: "blue",
  },
];

const CategoryList = () => {
  return (
    <div className={styles.box}>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
