import React from 'react';
import styles from './Project.module.css';

const Project = () => {
  return (
    <div id="home" className={styles.navbarContainer}>
      <section id="project" class={styles.projectSection}>
        <h1 class={styles.projectH1}>Project</h1>
        <h2 class="welcome-h2"></h2>
      </section>
    </div>
  );
};

export default Project;
