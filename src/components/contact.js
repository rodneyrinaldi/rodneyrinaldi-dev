import React from 'react';

import styles from './contact.module.css';

function Contact(props) {
  return (
    <session className={styles.wrapper}>
      <a href="#"><img src="/whatsapp.svg" alt="whatsapp" className={styles.icon} /></a>
      <a href="#"><img src="/arroba.svg" alt="whatsapp" className={styles.icon} /></a>
      {props.showback === 'yes' ? <a href="/"><img src="/back.svg" alt="go back" className={styles.icon} /></a> : <></>}
    </session>
  );
}

export default Contact;