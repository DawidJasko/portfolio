import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return <div id="home" className={styles.navbarContainer}>
    <section id="home" class={styles.welcomeSection}>
        <h1 class={styles.welcomeH1}>Hey I am Dawid</h1>
        <h2 class="welcome-h2"></h2>
      </section>
  </div>;
};

export default Home;
