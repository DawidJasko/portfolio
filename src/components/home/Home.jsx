import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div id="home" className={styles.navbarContainer}>
      <section id="home" class={styles.homeSection}>
        <h1 class={styles.homeH1}>Hey I am Dawid</h1>
        <h2 class={styles.homeH2}>I am a bodybuilder</h2>
      </section>
    </div>
  );
};

export default Home;
