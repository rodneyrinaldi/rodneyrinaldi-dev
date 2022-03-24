import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./index.module.css";
function Contact(props) {
  const router = useRouter();
  const wapp =
    "https://api.whatsapp.com/send?phone=+551131646843&text=Olá, gostaria de obter maiores informações.";

  return (
    <session className={styles.wrapper}>
      <Link href={wapp} target="_blank" rel="noreferrer">
        <a>
          <Image
            src="/whatsapp.svg"
            alt="whatsapp"
            className={styles.icon}
            target="_blank"
            rel="noreferrer"
            width="60"
            height="60"
          />
        </a>
      </Link>
      <a onClick={() => router.push("/")}>
        <Image
          src="/email.svg"
          alt="whatsapp"
          className={styles.icon}
          width="60"
          height="60"
        />
      </a>
      <a href="#toppage">
        <Image
          src="/top.svg"
          alt="go top"
          className={styles.icon}
          width="60"
          height="60"
        />
      </a>
      {props.showback === "yes" ? (
        <a onClick={() => router.back()}>
          <Image
            src="/back.svg"
            alt="go back"
            className={styles.icon}
            width="60"
            height="60"
          />
        </a>
      ) : (
        <></>
      )}
    </session>
  );
}

export default Contact;
