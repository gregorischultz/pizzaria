import React from "react";
import styles from '../../styles/Apresentation.module.css';
import pizzaImg from '../../assets/DIONYIMG.png';

function Apresentation() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroText}>
                <h1>Il est important de vivre le moment présent</h1>
            </div>
            <div className={styles.heroImageContainer}>
                <img src={pizzaImg} alt="Pizza" className={styles.heroImage} />
            </div>
        </section>
    );
}

export default Apresentation;
