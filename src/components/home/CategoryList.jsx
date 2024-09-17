import React from "react";
import styles from "./CategoryList.module.css";
import CategoryCard from "./CategoryCard.jsx";

import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaBrush } from "react-icons/fa6";
import { FaBucket } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { PiPipeFill } from "react-icons/pi";

const categories = [
  { name: "Cleaning", icon: FaBucket, color: "purple" },
  { name: "Repairing", icon: FaScrewdriverWrench, color: "grey" },
  { name: "Painting", icon: FaBrush, color: "green" },
  { name: "Shifting", icon: FaTruck, color: "braun" },
  { name: "Plumping", icon: PiPipeFill, color: "orange" },
  { name: "Electric", icon: FaLightbulb, color: "blue" },
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
