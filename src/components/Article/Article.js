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
      <div className={styles.titleBar}>
        <div className={styles.titleButtons}>
          <span className={styles.btnClose} onClick={onClose} />
          <span className={styles.btnMini} />
          <span className={styles.btnMax} />
        </div>
        <div className={styles.titleLabel}>{title}</div>
      </div>
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

export default Article;
