import React from 'react';

import styles from './index.module.css';

function Project({ title, description }) {
  return (
    <a href='#' className={styles.card}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default Project