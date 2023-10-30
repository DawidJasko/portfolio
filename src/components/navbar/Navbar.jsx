import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav id={styles.navbar}>
      <div className={styles.logo}>
        <h2 className={styles.logoH2}>DJ</h2>
      </div>
      <div className={styles.ulnavbar}>
        <ul className={styles.ulContainer}>
          <li className={styles.linavbar}>
            <Link
              className={styles.linknavbar}
              to="home"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              &#60;&#8201;Start&#8201;&#47;&#62;
            </Link>
          </li>
          
          <li className={styles.linavbar}>
            <Link
              className={styles.linknavbar}
              to="project"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              &#60;&#8201;Project&#8201;&#47;&#62;
            </Link>
          </li>
          <li className={styles.linavbar}>
            <Link
              className={styles.linknavbar}
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              &#60;&#8201;About&#8201;&#47;&#62;
            </Link>
          </li>
          <li className={styles.linavbar}>
            <Link
              className={styles.linknavbar}
              to="contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              &#60;&#8201;Contact&#8201;&#47;&#62;
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
