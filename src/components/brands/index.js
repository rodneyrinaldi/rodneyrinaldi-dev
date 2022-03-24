import Image from "next/image";
import React from "react";
import styles from "./index.module.css";

function Brands({ key, alt, pic }) {
  return (
    <>
      <div className={styles.card}>
        <Image
          className={styles.logo}
          width="60"
          height="60"
          src={pic}
          alt={alt}
        />
      </div>
    </>
  );
}

export default Brands;
