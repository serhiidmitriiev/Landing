import React from "react";
import { BUTTON_MAIN } from "./constants";
import styles from "./Button.module.css";

function Button() {
  return (
    <div>
      <button className={styles.btn}>
        <h3 className={styles.btn_text}>{BUTTON_MAIN}</h3>
      </button>
    </div>
  );
}

export default Button;
