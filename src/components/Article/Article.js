import React from 'react';

const Article = ({ onCloseArticle, children, title, img, ...props }) => (
  <article style={{ display: 'none' }} {...props}>
    <h2 className="major">{title}</h2>
    {img && (
      <span className="image main">
        <img src={img} alt="" />
      </span>
    )}
    {children}
    <div className="close" onClick={onCloseArticle} />
  </article>
);

export default Article;
