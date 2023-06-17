import React from "react";
import Header from "../components/Header";
import Article from "../components/Article";
import Button from "../components/Button";
import globe1 from "../assets/globe1.svg";
import globe2 from "../assets/globe2.svg";
import globe3 from "../assets/globe3.svg";
import lizababazao from "../assets/lizasao.png";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <img src={globe1} alt="globe1" className={styles.globe1} />
      <img src={globe2} alt="globe2" className={styles.globe2} />
      <img src={globe3} alt="globe3" className={styles.globe3} />
      <img src={lizababazao} alt="Lizasao" className={styles.photo} />
      <Article />
      <Button />
    </main>
  );
}

export default Main;
