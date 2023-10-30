import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div id="home" className={styles.navbarContainer}>
      <section id="contact" class={styles.contactSection}>
        {/* <h1 class={styles.contactH1}></h1> */}
        <div className={styles.conempty}></div>
        <div className={styles.conline}>
          <div className={styles.conclass}>
            <p className={styles.concode}>
            <span className={styles.spanbludark}>const </span> <span className={styles.spandawid}> Dawid Jaśko</span>
            <span className={styles.spanwhite}>
                &#8194; &#61;&#8194;&#40;&#8201;&#41;&#8194;</span>
                <span className={styles.spanbludark}>&#61;&#62;</span><span className={styles.spanwhite}> &#123;</span>
              <br />
              &#160; useState&#40;&#8201;&#41;&#8194; &#123; <br />
              &#160; this.name = <span className={styles.spanwhite}>'Dawid Jaśko'</span> <br />
              &#160; this.mail = <span className={styles.spanwhite}>'dawidjasko98@wp.pl'</span> &#160; &#160;
              <br /> &#125;
              <br />
              &#160; workExperiens&#40;&#8201;&#41;&#8194; &#123; <br />
              &#160; <span className={styles.conreturn}> return</span>&#8194; &#91;
              <br />
              &#160; 2021 - now: <span className={styles.spanwhite}>Wielton</span> <br/>&#8194;&#93; &#160; <br />
              &#125;
              <br />
              &#160;education&#40;&#8201;&#41;&#8194; &#123; <br />
              &#160; <span className={styles.conreturn}> return</span>&#8194; &#91;
              <br />
              &#160;2017 - 2021: <span className={styles.spanwhite}>studia opole</span> &#160;
              <br />
              &#8194;&#93;<br/>
              &#125;
              <br />
              &#160;skills&#40;&#8201;&#41;&#8194; &#123; <br />
              &#160; <span className={styles.conreturn}> return</span><span className={styles.spanwhite}>&#8194; &#91;</span>
              <br />
              &#8194;html itd
              <br />
              <span className={styles.spanwhite}> &#8194;&#93;<br/></span>
              <span className={styles.spanwhite}> &#125;</span>
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
