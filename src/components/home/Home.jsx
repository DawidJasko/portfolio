import React from 'react';
import styles from './Home.module.css';
import Typewriter from 'typewriter-effect';
import {  ParallaxLayer } from '@react-spring/parallax'


const Home = () => {
  return (
    <div id="home" className={styles.navbarContainer}>
      <div class={styles.empty}></div>
      <section id="home" class={styles.homeSection}>
        <h1 class={styles.homeH1}>Dawid Jaśko</h1>
        <h2 class={styles.homeH2}>
          <p className={styles.typeWriterP}>I'm </p>
          <div className={styles.typeWriter}>
            <Typewriter
              options={{
                strings: [
                  ' enginer',
                  ' bodybulider',
                  ' developer',
                  'guitarist',
                ],
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
