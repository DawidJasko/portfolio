import React from 'react';
import styles from './Home.module.css';
import Typewriter from 'typewriter-effect';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Home = () => {
  // const ref = useRef();
  return (
    <div id="home" className={styles.navbarContainer}>
      {/* <Parallax pages={2} ref={ref}> */}
      {/* <ParallaxLayer offset={0} speed={2.5}> */}
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
      {/* </ParallaxLayer> */}
      {/* </Parallax> */}
    </div>
  );
};

export default Home;
