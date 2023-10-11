import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <section id="About" class={styles.aboutSection}>
        <div className={styles.aboutfirstsection}>
          <div className={styles.aboutTitle1}>
        <div className={styles.aboutTitle}>
        <h1 class={styles.aboutH1}>About me </h1>
        </div>
        <div className={styles.aboutTitle2}></div>
        </div>
        <div className={styles.aboutdescription}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        {/* <div className={styles.empty}></div> */}
        </div>
        <div className={styles.aboutsecondsection}>
          <div className={styles.skils}><p className={styles.skilsp}>HTML</p></div>
          <div className={styles.skils}><p className={styles.skilsp}>CSS</p></div>
          <div className={styles.skils}><p className={styles.skilsp}>JS</p></div>
          <div className={styles.skils}><p className={styles.skilsp}>REACT</p></div>
        </div>
      </section>
    </div>
  );
};

export default About;
