// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Header.module.css';
import logo from '../assets/Logo.png';

function Header() {
    return (
      <nav className={styles.navbar}>
        <img src={logo} className={styles.logo}/> 
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/Carte" className={styles.navLink}>
            Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/Apropos" className={styles.navLink}>
            A propos
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/Contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
        <button className={styles.buttonReserver}>
          <p>Reserver une table</p>
        </button>
      </nav>
    );
}

export default Header;
