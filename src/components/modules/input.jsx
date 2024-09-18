import styles from "./input.module.css";
import React from "react";

//function TextInput() {
//const handleChange = (event) => {
//  setVlue(event.target.value);
// };
//}

const input = () => {
  return (
    <div>
      <input
        type="text"
        //  value={value}
        // onChange={handleChange}
        className={styles.input}
        placeholder="serdziukas"
      ></input>
    </div>
  );
};

export default input;
