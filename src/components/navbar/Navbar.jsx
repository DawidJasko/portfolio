import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <header className={styles.headers}>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a hrev="styles.welcomeSection">Home</a>
            </li>
            <li className={styles.li}>
              <a hrev="#">About</a>
            </li>
            <li className={styles.li}>
              <a hrev="#">Project</a>
            </li>
            <li className={styles.li}>
              <a hrev="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class={styles.empty}></div>
      <section id={styles.welcomeSection}>
        <h1 class={styles.welcomeH1}>Hey I am Dawid</h1>
        <h2 class="welcome-h2"></h2>
      </section>
      <section id={styles.welcomeSection2}>
        <h1 class="welcome-h1">Hey I am Dawid</h1>
        <h2 class="welcome-h2"></h2>
      </section>
    </div>
  );
};

export default Navbar;
