import Head from 'next/head'
import cvpdf from '../assets/cv.rodneyrinaldi.pdf';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>dev.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/rr-logo.svg" alt="rodneyrinaldi" className={styles.logo1} />
        <img src="/rodneyrinaldi.svg" alt="rodneyrinaldi" className={styles.logo2} />

        <code className={styles.code}>
          <h1>{"{sustentability=ethical*((bpm*(journey*(crm*(clt)+hr(usr)))))}"}</h1>
          <h2>{"{sustentability=ethical*journey}"}</h2>
        </code>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>manifesto &rarr;</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto nam beatae voluptas recusandae repellendus hic et.</p>
          </a>

          <a href={cvpdf} target="_blank" className={styles.card}>
            <h3>curriculum &rarr;</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto nam facilis magni aliquid itaque tenetur, fugiat</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>portfólio &rarr;</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>artigos &rarr;</h3>
            <p>Lorem ipsum ellendus hic et eius impedit voluptate quam eveniet
            ex facilis magni aliquid itaque,
              tenetur, fugiat omnis ab</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://adv.rodneyrinaldi.com">adv.rodneyrinaldi.com</a>
        <a href="https://rodneyrinaldi.com"><img src="/rr-logo.svg"
          alt="rodneyrinaldi" /></a>
        <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
      </footer>

    </div>
  )
}
