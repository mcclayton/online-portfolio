import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
const cx = classNames.bind(styles);

const Article = ({ id, title, article, timeout, onClose, children, img, ...props }) => {
  const classes = cx(styles.article, {
    [styles.active]: article === id,
    [styles.timeout]: !!timeout
  });
  return (
    <article className={classes} style={{ display: 'none' }} {...props}>
      <h2 className="major">{title}</h2>
      {img && (
        <span className="image main">
          <img src={img} alt="" />
        </span>
      )}
      {children}
      <div className={styles.close} onClick={onClose} />
    </article>
  );
};

export default Article;
