import React from 'react';
import styles from './Home.module.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
  const { text } = {
    words: ['developer', 'bodybulider', 'Enginer'],
    loop: {},
  };
  return (
    <div id="home" className={styles.navbarContainer}>
      <section id="home" class={styles.homeSection}>
        <h1 class={styles.homeH1}>Dawid Jaśko</h1>
        <h2 class={styles.homeH2}>
          <p className={styles.typeWriterP}>I'm </p>
          <div className={styles.typeWriter}>
            <Typewriter
              options={{
                strings: [' Enginer', ' bodybulider', ' developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </h2>
      </section>
    </div>
  );
};

export default Home;
