import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div id="home" className={styles.navbarContainer}>
      <section id="contact" class={styles.contactSection}>
        <h1 className={styles.contactH1}>Find me on:</h1>
        <div className={styles.contactSocialmediaCon}>
          <div className={styles.contactFb}>facebook</div>
          <div className={styles.contactFb}>github</div>
          <div className={styles.contactFb}>linkedin</div>
          <div className={styles.contactFb}>instagram</div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
