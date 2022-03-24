import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

function Menu({ url, alt, pic, title, description }) {
  return (
    <Link href={url}>
      <a className={styles.card}>
        <Image
          src={pic}
          alt={alt}
          className={styles.logo}
          width="50"
          height="50"
        />
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </Link>
  );
}

export default Menu;
