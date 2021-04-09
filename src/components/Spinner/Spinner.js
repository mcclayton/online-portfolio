import React from 'react';
import styles from './styles.module.scss';

const Spinner = ({ children, ...props }) => (
  <div className={styles.content}>
    <div className={styles.spinner}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7" stroke-width="1"/>
      </svg>
    </div>
    <div className={styles.label}>
      <p>{props.label}</p>
    </div>
  </div>
);

export default Spinner;
