import React from "react";
import styles from "./CategoryList.module.css";

const CategoryCard = ({ category }) => {
  const { name, icon } = category;
  const Icon = icon;

  return (
    <div className={styles.card}>
      <Icon fontSize={40} color={category.color} />
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
