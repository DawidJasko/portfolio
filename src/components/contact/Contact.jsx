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
              const <span className={styles.spandawid}> Dawid Jaśko</span>
              &#8194; &#61;&#8194;&#40;&#8201;&#41;&#8194;&#61;&#62; &#123;
              <br />
              &#160; useState&#40;&#8201;&#41;&#8194; &#123; <br />
              &#160; this.name = 'Dawid Jaśko' <br />
              &#160; this.mail = 'dawidjasko98@wp.pl' &#160; &#160;
              <br /> &#125;
              <br />
              &#160; workExperiens&#40;&#8201;&#41;&#8194; &#123; <br />
              &#160; <span className={styles.conreturn}> return</span>&#8194; &#91;
              <br />
              &#160; 2022 - now: Wielton <br/>&#8194;&#93; &#160; <br />
              &#125;
              <br />
              &#160;education&#40;&#8201;&#41;&#8194; &#123; <br />
              &#160; <span className={styles.conreturn}> return</span>&#8194; &#91;
              <br />
              &#160;2018 - 2022: studia opole &#160;
              <br />
              &#8194;&#93;<br/>
              &#125;
              <br />
              &#160;skills&#40;&#8201;&#41;&#8194; &#123; <br />
              &#160; <span className={styles.conreturn}> return</span>&#8194; &#91;
              <br />
              &#8194;html itd
              <br />
              &#8194;&#93;<br/>
              &#125;
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
