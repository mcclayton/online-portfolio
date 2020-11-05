import PropTypes from 'prop-types';
import React, { useEffect, useCallback } from 'react';
import { ARTICLE_IDS } from '../../constants';
import Article from '../Article';
import UnderConstruction from './UnderConstruction';
import CodeMemoji from '../CodeMemoji';
import pic01 from '../../images/pic01.jpg';
import wave from '../../images/wave_emoji.png';
import styles from './styles.module.scss';

const ESCAPE_KEY_VALUES = [27, 'Escape'];

const getKeyCode = (event) => event.key || event.keyIdentifier || event.keyCode;

function Main({
  article,
  articleTimeout,
  timeout,
  setWrapperRef,
  onCloseArticle,
}) {
  const escFunction = useCallback(
    (event) => {
      if (ESCAPE_KEY_VALUES.includes(getKeyCode(event))) {
        onCloseArticle();
      }
    },
    [onCloseArticle]
  );

  useEffect(() => {
    document.addEventListener('keyup', escFunction, false);
    return () => {
      document.removeEventListener('keyup', escFunction, false);
    };
  }, [escFunction]);

  const baseArticleProps = { article, timeout: articleTimeout, onClose: onCloseArticle };
  return (
    <div
      ref={setWrapperRef}
      id="main"
      style={{ display: timeout ? 'flex' : 'none' }}
    >
      <Article
        title="Intro"
        id={ARTICLE_IDS.Intro}
        img={<CodeMemoji />}
        {...baseArticleProps}
      >
        <>
          <p>
            Hello there, I'm{' '}
            <span className={styles.attention}>Michael Clayton</span>!
            <img className={styles.waveEmoji} src={wave} alt="Wave Emoji" />
          </p>
          <p className={styles.infoBlock}>
            I graduated from Purdue University with a Bachelor of Science in
            Computer Science.
            <br />
            I crave learning and love a challenge.
            <br />I have a passion for software development and continually seek
            to push the boundaries of my knowledge and experience.
          </p>
        </>
      </Article>

      <Article
        title="Work"
        id={ARTICLE_IDS.Work}
        img={<img src={pic01} />}
        {...baseArticleProps}
      >
        <UnderConstruction />
      </Article>

      <Article
        title="About"
        id={ARTICLE_IDS.About}
        img={<img src={pic01} />}
        {...baseArticleProps}
      >
        <UnderConstruction />
      </Article>

      <Article
        title="Contact"
        id={ARTICLE_IDS.Contact}
        {...baseArticleProps}
      >
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
      </Article>
    </div>
  );
}

Main.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
