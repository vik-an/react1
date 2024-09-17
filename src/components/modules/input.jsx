import styles from "./input.module.css";
import React from "react";

const input = () => {
  return (
    <div>
      <input className={styles.input} placeholder="serdziukas"></input>

      <div></div>
    </div>
  );
};

export default input;
