import React from "react";
import { DESCRIPTION_SECTION } from "../components/constants";
import globe4 from "../assets/globe4.svg";
import boxer from "../assets/boxer.png";
import styles from "./Description.module.css";
function Description() {
  const { header, description } = DESCRIPTION_SECTION;
  return (
    <section className={styles.section}>
      <img src={globe4} alt="globe2" className={styles.globe4} />
      <img src={boxer} alt="boxer" className={styles.boxer} />
      <h1 className={styles.header}>{header}</h1>
      <p className={styles.text}>{description}</p>
    </section>
  );
}

export default Description;
