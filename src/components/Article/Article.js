import React from 'react';

const Article = ({ onCloseArticle, children, id, title, img, ...props }) => (
  <article
    id="about"
    style={{ display: 'none' }}
    {...props}
  >
    <h2 className="major">{title}</h2>
    {
      img && (
        <span className="image main">
          <img src={img} alt="" />
        </span>
      )
    }
    {children}
    <div
      className="close"
      onClick={onCloseArticle}
    />
  </article>
);

export default Article;
