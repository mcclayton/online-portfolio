import React from 'react';
import styles from './styles.module.scss';

const Avatar = ({ src, ...props }) => (
  <div className={styles.rippleConatiner}>
    <img src={src} className={styles.avatar} {...props} />
  </div>
);

export default Avatar;
