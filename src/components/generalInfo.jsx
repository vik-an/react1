import styles from "./generalInfo.module.css";
import Button from "./modules/Button.jsx";
import { CiSearch } from "react-icons/ci";
import React from "react";

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

      <input placeholder=" Search" />
      <Button rounded onClick={() => alert("Not today")}>
        <div>
          <CiSearch fontSize={20} />
        </div>
      </Button>
    </div>
  );
};
