import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Meta from "../meta";
import styles from "./index.module.css";

function Header(props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>dev.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Meta
        title="Rodney Rinaldi Dev"
        descrition="Advocacia moderna, eficiente e ética"
        image="https://dev.rodneyrinaldi.com/card.jpg"
        url="https://dev.rodneyrinaldi.com/"
      />

      <div name="toppage" className={styles.container}>
        <div>
          <Image
            width={24}
            height={24}
            src="/rr-dev.svg"
            alt="rodneyrinaldi"
            className={styles.logo1}
          />
        </div>
        <div>
          <Image
            width={240}
            height={40}
            src="/rodneyrinaldi.svg"
            alt="rodneyrinaldi"
            className={styles.logo2}
          />
        </div>
      </div>
      {props.showcard === "yes" ? (
        <Link href="/card">
          <a className={styles.card}>
            <Image
              width={26}
              height={26}
              src="/rr-card.svg"
              alt="cartão visitas"
              className={styles.logo3}
            />
          </a>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
