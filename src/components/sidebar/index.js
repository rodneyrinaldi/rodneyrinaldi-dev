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
        <a onClick={() => router.push("/")}>
          <div className={styles.icon}>
            <Image src="/sidebar/home.png" alt="email" width="42" height="42" />
          </div>
        </a>
        <br />
        <a href="#toppage">
          <div className={styles.icon}>
            <Image src="/sidebar/top.png" alt="go top" width="42" height="42" />
          </div>
        </a>
        {props.showback === "yes" ? (
          <a onClick={() => router.back()}>
            <div className={styles.icon}>
              <Image
                src="/sidebar/back.png"
                alt="go back"
                width="42"
                height="42"
              />
            </div>
          </a>
        ) : (
          <></>
        )}
      </div>

      <div className={styles.wrapperBottom}>
        <a href={wapp} target="_blank" rel="noreferrer">
          <div className={styles.icon}>
            <Image
              src="/sidebar/whatsapp.png"
              alt="whatsapp"
              target="_blank"
              rel="noreferrer"
              width="42"
              height="42"
            />
          </div>
        </a>
        <a onClick={() => router.push("/message")}>
          <div className={styles.icon}>
            <Image
              src="/sidebar/email.png"
              alt="email"
              width="42"
              height="42"
            />
          </div>
        </a>
      </div>
    </>
  );
}

export default Contact;
