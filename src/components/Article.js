import React from "react";
import { MAIN_PARA } from "./constants";
import insta from "../assets/insta.svg";
import styles from "./Article.module.css";

function Article() {
  const { greeting, definition, description } = MAIN_PARA;
  return (
    <article>
      <h1 className={styles.greeting}>{greeting}</h1>
      <h1 className={styles.definition}>{definition}</h1>
      <p className={styles.description}>{description}</p>

      <a href="" className={styles.insta}>
        <img src={insta} alt="insta" />
      </a>
    </article>
  );
}

export default Article;
