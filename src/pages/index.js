import Head from 'next/head'
import Link from 'next/link'

import Contact from '../components/contact'

import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Head>
        <title>dev.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact showback='no' />

      <main className={styles.main}>
        <img src="/rr-logo.svg" alt="rodneyrinaldi" className={styles.logo1} />
        <img src="/rodneyrinaldi.svg" alt="rodneyrinaldi" className={styles.logo2} />

        <code className={styles.code}>
          <h1>{"{sustentability=ethical*((bpm*(journey*(crm*(clt)+hr(usr)))))}"}</h1>
          <h2>{"{sustentability=ethical*journey}"}</h2>
        </code>

        <div className={styles.grid}>
          <Link href="/portfolio">
            <a href="/portfolio" className={styles.card}>
              <img src="/portfolio.png" alt="portfolio" className={styles.logo3} />
              <h2>PORTFÓLIO</h2>
              <p>Consultoria, projetos, arquitetura de software e trabalhos desenvolvidos.</p>
            </a>
          </Link>

          <Link href="/curriculum">
            <a href="/curriculum" className={styles.card}>
              <img src="/curriculo.png" alt="curriculo" className={styles.logo3} />
              <h2>CURRÍCULO</h2>
              <p>Javascript, ReactJS, React Native, Node.js, Microsoft e Oracle.</p>
            </a>
          </Link>

          <Link href="/manifesto">
            <a href="/manifesto" className={styles.card}>
              <img src="/manifesto.png" alt="manifesto" className={styles.logo3} />
              <h2>MANIFESTO</h2>
              <p>Princípios definidores para uma evolução ética e sustentável.</p>
            </a>
          </Link>

          <Link href="/editorial">
            <a href="/editorial" className={styles.card}>
              <img src="/editorial.png" alt="editorial" className={styles.logo3} />
              <h2>EDITORIAL</h2>
              <p>Publicações, cursos e materiais educacionais desenvolvidos.</p>
            </a>
          </Link>

        </div>
      </main>

      <session className={styles.midias}>
        <a href="https://www.linkedin.com/in/rodneyrinaldi/">linkedin.com/in/rodneyrinaldi/</a>
        <a href="https://github.com/rodneyrinaldi">github.com/rodneyrinaldi</a>
      </session>

      <footer className={styles.footer}>
        <a href="https://adv.rodneyrinaldi.com">adv.rodneyrinaldi.com</a>
        <a href="https://rodneyrinaldi.com"><img src="/rr-logo.svg"
          alt="rodneyrinaldi" /></a>
        <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
      </footer>

    </div>
  )
}
