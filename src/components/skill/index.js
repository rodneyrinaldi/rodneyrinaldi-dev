import Image from "next/image";
import React from "react";
import styles from "./index.module.css";

function Skill({ key, url, alt, pic }) {
  return (
    <a className={styles.card}>
      <Image
        src={pic}
        alt={alt}
        className={styles.logo}
        width="40"
        height="40"
      />
    </a>
  );
}

export default Skill;
