// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Header.module.css'; //para mexer no css da bara de navegacao voce vai na pasta styles e vai nesse arquivo que esta ai (navbar.module.css)

function Header() {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/Carte" className={styles.navLink}>
              Carte
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/Contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Header;