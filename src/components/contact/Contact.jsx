import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div id="home" className={styles.navbarContainer}>
      <section id="contact" class={styles.contactSection}>
        <h1 class={styles.contactH1}>Contact</h1>
        <h2 class="welcome-h2"></h2>
      </section>
    </div>
  );
};

export default Contact;
