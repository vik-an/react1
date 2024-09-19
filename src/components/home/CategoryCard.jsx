import React from "react";
import styles from "./CategoryList.module.css";
import UrlIcon from "../common/UrlIcon";

const CategoryCard = ({ category }) => {
  const { name } = category;

  return (
    <div className={styles.card}>
      <UrlIcon
        url={category.url}
        style={{ width: 48, height: 48, backgroundColor: category.color }}
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default CategoryCard;
