import styles from "./input.module.scss";
import React from "react";

//function TextInput() {
//const handleChange = (event) => {
//  setVlue(event.target.value);
// };
//}

const input = ({ placeholder }) => {
  return (
    <div>
      <input
        type="text"
        //  value={value}
        // onChange={handleChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
};

export default input;
