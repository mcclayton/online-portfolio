import React from 'react';
import styles from './styles.module.scss';
import portrait from '../../images/portrait.png';

const Avatar = () => (
  <div className={styles.container}>
    <div className={styles.slidingBackground} />
    <img src={portrait} className={styles.portrait} />
  </div>
);

export default Avatar;
