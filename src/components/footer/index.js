import Image from "next/image";
import React from "react";
import styles from "./index.module.css";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <a href="https://adv.rodneyrinaldi.com">adv.rodneyrinaldi.com</a>
        <a href="https://rodneyrinaldi.com">
          <Image src="/rr-ico.svg" alt="rodneyrinaldi" width="24" height="24" />
        </a>
        <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
      </div>
      <div className={styles.container}>
        <p>Travessa Dona Paula 13 Higienópolis São Paulo SP (11) 3164-6843</p>
      </div>
    </>
  );
}

export default Footer;
