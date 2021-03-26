import React from 'react';
import { useRouter } from 'next/router'

import styles from './contact.module.css';

function Contact(props) {
  const router = useRouter()

  return (
    <session className={styles.wrapper}>
      <a onClick={() => router.push('/')}>
        <img src="/whatsapp.svg" alt="whatsapp" className={styles.icon} />
      </a>
      <a onClick={() => router.push('/')}>
        <img src="/arroba.svg" alt="whatsapp" className={styles.icon} />
      </a>
      <a href='#toppage'>
        <img src="/top.svg" alt="go top" className={styles.icon} />
      </a>
      {props.showback === 'yes'
        ? <a onClick={() => router.back()}>
          <img src="/back.svg" alt="go back" className={styles.icon} /></a>
        : <></>
      }
    </session>
  );
}

export default Contact;