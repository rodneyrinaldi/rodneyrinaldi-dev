import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

function Card() {
  return (
    <>
      <Link href="/">
        <a>
          <div className={styles.row}>
            <Image
              src="/images/rr-card-front.png"
              alt="cartão de visita"
              style={{ width: "500px", padding: "10px" }}
              width="500"
              height="300"
            />
            <Image
              src="/images/rr-card-back.png"
              alt="cartão de visita"
              style={{ width: "500px", padding: "10px" }}
              width="500"
              height="300"
            />
          </div>
        </a>
      </Link>
    </>
  );
}

export default Card;
