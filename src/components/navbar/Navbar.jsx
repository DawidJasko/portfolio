import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <header className={styles.headers}>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a hrev="#">Home</a>
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
    </div>
  );
};

export default Navbar;
