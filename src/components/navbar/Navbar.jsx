import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <header className={styles.headers}>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
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
      <section id="home" class={styles.welcomeSection}>
        <h1 class={styles.welcomeH1}>Hey I am Dawid</h1>
        <h2 class="welcome-h2"></h2>
      </section>
      <section id="about" class={styles.welcomeSection2}>
        <h1 class="welcome-h1">Hey I am Dawid</h1>
        <h2 class="welcome-h2"></h2>
      </section>
    </div>
  );
};

export default Navbar;
