import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <header className={styles.headers}>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a hrev="#Home">Home</a>
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
          <div class="empty"></div>
          <section id="welcome-section">
            <h1 class="welcome-h1">Hey I am Mimic</h1>
            <h2 class="welcome-h2">a web developer</h2>
          </section>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
