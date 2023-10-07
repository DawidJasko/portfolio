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
                className={styles.link}
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
                className={styles.link}
                to="about"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                className={styles.link}
                to="project"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                Project
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                className={styles.link}
                to="contact"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div class={styles.empty}></div>
    </div>
  );
};

export default Navbar;
