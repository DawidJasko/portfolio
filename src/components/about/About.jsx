import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div id="about" className={styles.navbarContainer}>
      <section id="About" class={styles.aboutSection}>
        <h1 class={styles.aboutH1}>Hey I am </h1>
        <h2 class={styles.aboutH2}></h2>
      </section>
    </div>
  );
};

export default About;
