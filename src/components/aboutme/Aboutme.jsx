import React from 'react';
import styles from './Aboutme.module.css';

const Aboutme = () => {
  return (
    <div id="home" className={styles.navbarContainer}>
      <section id="aboutme" class={styles.aboutmeSection}>
        {/* <h1 class={styles.aboutmeH1}></h1> */}
        <div className={styles.conempty}></div>
        <div className={styles.conline}>
          <div className={styles.conclass}>
            <p className={styles.concode}>
            <span className={styles.spanbludark}>const </span> <span className={styles.spandawid}> Dawid Jaśko</span>
            <span className={styles.spanwhite}>
                &#8194; &#61;&#8194;&#40;&#8201;&#41;&#8194;</span>
                <span className={styles.spanbludark}>&#61;&#62;</span><span className={styles.spanwhite}> &#123;</span>
              <br />
              &#160; useState<span className={styles.spanwhite}>&#40;&#8201;&#41;&#8194; &#123;</span> <br />
              &#160; this.name = <span className={styles.spanwhite}>'Dawid Jaśko'</span> <br />
              &#160; this.mail = <span className={styles.spanwhite}>'dawidjasko98@wp.pl'</span><span className={styles.spanwhite}> &#160; &#160; 
              <br /> &#125;</span>
              <br />
              &#160; workExperiens<span className={styles.spanwhite}>&#40;&#8201;&#41;&#8194; &#123;</span> <br />
              &#160; <span className={styles.conreturn}> return</span><span className={styles.spanwhite}>&#8194; &#91;</span>
              <br />
              &#160; 2021 - now: <span className={styles.spanwhite}>'Wielton'</span> 
              <span className={styles.spanwhite}><br/>&#8194;&#93; &#160; <br />
              &#125;
              </span>
              <br />
              &#160;education<span className={styles.spanwhite}>&#40;&#8201;&#41;&#8194; &#123;</span> <br />
              &#160; <span className={styles.conreturn}> return</span><span className={styles.spanwhite}>&#8194; &#91;</span>
              <br />
              &#160;2017 - 2021: <span className={styles.spanwhite}>'studia opole'</span> &#160;
              <br />
              <span className={styles.spanwhite}> &#8194;&#93;<br/>
              &#125;</span>
              <br />
              &#160;skills<span className={styles.spanwhite}>&#40;&#8201;&#41;&#8194; &#123;</span> <br />
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

export default Aboutme;
