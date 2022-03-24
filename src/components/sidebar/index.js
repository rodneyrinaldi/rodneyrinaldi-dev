import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "./index.module.css";
function Contact(props) {
  const router = useRouter();
  const wapp =
    "https://api.whatsapp.com/send?phone=+551131646843&text=Olá, gostaria de obter maiores informações sobre:";

  return (
    <>
      <div className={styles.wrapperTop}>
        <a href="#toppage">
          <Image
            src="/sidebar/top.png"
            alt="go top"
            className={styles.icon}
            width="42"
            height="42"
          />
        </a>
        {props.showback === "yes" ? (
          <a onClick={() => router.back()}>
            <Image
              src="/sidebar/back.png"
              alt="go back"
              className={styles.icon}
              width="42"
              height="42"
            />
          </a>
        ) : (
          <></>
        )}
      </div>

      <div className={styles.wrapperBottom}>
        <a href={wapp} target="_blank" rel="noreferrer">
          <Image
            src="/sidebar/whatsapp.png"
            alt="whatsapp"
            className={styles.icon}
            target="_blank"
            rel="noreferrer"
            width="42"
            height="42"
          />
        </a>
        <a onClick={() => router.push("/message")}>
          <Image
            src="/sidebar/email.png"
            alt="email"
            className={styles.icon}
            width="42"
            height="42"
          />
        </a>
      </div>
    </>
  );
}

export default Contact;
