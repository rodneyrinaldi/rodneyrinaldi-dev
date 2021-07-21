import Link from 'next/link'
import React from 'react';

import styles from './index.module.css';

function Project({ url, alt, pic, title, description }) {
  return (
    <Link href={url}>
      <a href={url} className={styles.card}>
        <img src={pic} alt={alt} className={styles.logo} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
}

export default Project