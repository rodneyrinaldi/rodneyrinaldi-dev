import Link from 'next/link'
import React from 'react';

import styles from './index.module.css';

function Skill({ url, alt, pic }) {
  return (
    <Link href={url}>
      <a href={url} className={styles.card}>
        <img src={pic} alt={alt} className={styles.logo} />
      </a>
    </Link>
  );
}

export default Skill