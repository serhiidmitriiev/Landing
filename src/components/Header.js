import React from "react";
import { NAV_LINKS } from "./constants";

import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        {NAV_LINKS.map((elem) => (
          <a href={elem.id} className={styles.links}>
            {elem.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
