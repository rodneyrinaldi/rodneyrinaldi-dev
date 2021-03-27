import Head from 'next/head'
import Link from 'next/link'

import Contact from '../components/contact'
import Menu from '../components/menu'

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
          <Menu
            url='/portfolio'
            alt='portfolio'
            pic='/portfolio.png'
            title='PORTFÓLIO'
            description='Consultoria, projetos, arquitetura de software e trabalhos desenvolvidos.'
          />

          <Menu
            url='/curriculum'
            alt='curriculum'
            pic='/curriculo.png'
            title='CURRÍCULO'
            description='Javascript, ReactJS, React Native, Node.js, Microsoft e Oracle.'
          />

          <Menu
            url='/manifesto'
            alt='manifesto'
            pic='/manifesto.png'
            title='MANIFESTO'
            description='Princípios definidores para uma evolução ética e sustentável.'
          />

          <Menu
            url='/editorial'
            alt='editorial'
            pic='/editorial.png'
            title='EDITORIAL'
            description='Publicações, cursos e materiais educacionais desenvolvidos.'
          />
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
