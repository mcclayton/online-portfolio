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
      <Toolbar title={title} onClose={onClose} />
      <div className={styles.content}>
        <>
          {img && (
            <span className="image main">
              <img src={img} alt="" />
            </span>
          )}
          {children}
        </>
      </div>
    </article>
  );
};

function Toolbar({ title, onClose }) {
  return (
    <div className={styles.titleBar}>
      <div className={styles.buttons}>
        <span className={styles.close} onClick={onClose} />
        <span className={styles.mini} />
        <span className={styles.max} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}

export default Article;
