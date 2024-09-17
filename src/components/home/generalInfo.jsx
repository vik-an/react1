import styles from "./generalInfo.module.css";
import Button from "../modules/Button.jsx";
import { CiSearch } from "react-icons/ci";
import React from "react";
import Input from "../modules/input.jsx";
import CategoryList from "./CategoryList.jsx";

export const MainPage = () => {
  return (
    <div className={styles.main}>
      <h1>
        Find Home <span className={styles.purple}>Service/Repair</span>
      </h1>
      <h1>Near You</h1>
      <p className={styles.small}>
        Explore Best Home Service & Repair near you
      </p>
      <div className={styles.inputSection}>
        <Input />
        <Button rounded>
          <div>
            <CiSearch fontSize={20} />
          </div>
        </Button>
      </div>
      <div>
        <CategoryList className={styles.container} />
      </div>
    </div>
  );
};
