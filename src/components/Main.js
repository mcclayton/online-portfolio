import PropTypes from 'prop-types'
import React from 'react';
import { ARTICLE_IDS } from '../constants';
import Article from './Article';
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

const getClassFn = (article, articleTimeout) => function getClass(id) {
  return `${article === id ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`;
};

function Main({ article, articleTimeout, timeout, setWrapperRef, onCloseArticle }) {
  const getArticleClass = getClassFn(article, articleTimeout);
  return (
    <div
      ref={setWrapperRef}
      id="main"
      style={timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <Article
        title="Intro"
        img={pic01}
        onCloseArticle={onCloseArticle}
        className={getArticleClass(ARTICLE_IDS.Intro)}
      >
        <p>
          My name is Michael Clayton. I graduated from Purdue University with a
          Bachelor of Science in Computer Science. I crave learning and love a
          challenge. I have a passion for software development and continually
          seek to push the boundaries of my knowledge and experience.
        </p>
      </Article>

      <Article
        title="Work"
        img={pic02}
        onCloseArticle={onCloseArticle}
        className={getArticleClass(ARTICLE_IDS.Work)}
      >
        <p>...</p>
      </Article>

      <Article
        title="About"
        img={pic03}
        onCloseArticle={onCloseArticle}
        className={getArticleClass(ARTICLE_IDS.About)}
      >
        <p>...</p>
      </Article>

      <Article
        title="Contact"
        onCloseArticle={onCloseArticle}
        className={getArticleClass(ARTICLE_IDS.Contact)}
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
  )
}

Main.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
