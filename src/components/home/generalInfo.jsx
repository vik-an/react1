import styles from "./generalInfo.module.scss";
import Button from "../modules/Button.jsx";
import { CiSearch } from "react-icons/ci";
import React from "react";
import Input from "../modules/input.jsx";
import CategoryList from "./CategoryList.jsx";
import { ROUTES } from "../../routes/consts";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <h1>
        Find Home <span className={styles.purple}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.small}>
        Explore Best Home Service & Repair near you
      </p>
      <div className={styles.inputSection}>
        <Input />
        <Button rounded onClick={() => navigate(ROUTES.SEARCH_CATEGORY)}>
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
