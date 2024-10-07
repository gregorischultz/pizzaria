// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Header.module.css';
import logo from '../assets/Logo.png';



function Header() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.logo} alt="Logo Pizzaria"/> 
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Cartes
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
        <div className={styles.buttonContainer}>
          <button className={styles.buttonReserver}>
            Reserver une table
          </button>
        </div>
      </nav>
    );
}

export default Header;
