import Head from 'next/head'
import Link from 'next/link'

import Contact from '../components/contact'
import Project from '../components/project'

import styles from '../styles/portfolio.module.css'

export default function Manifesto() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Head>
        <title>dev.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact showback='yes' />

      <main className={styles.main}>
        <img src="/rr-logo.svg" alt="rodneyrinaldi" className={styles.logo1} />
        <img src="/rodneyrinaldi.svg" alt="rodneyrinaldi" className={styles.logo2} />

        <h1>PORTFÓLIO DE PRODUTOS E SERVIÇOS</h1>

        <div className={styles.grid}>
          <Project url='#' alt='' pic='/product.png'
            title='2021'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2020'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2019 Alexion'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2018 Alexion'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2016 Bayer Customer Relationship Management Brazil (Service Center)'
            description='Implantação do Salesforce como ferramenta de atendimento ao consumidor, projeto customizado pela equipe da Global, participação como Process Owner Representative' />

          <Project url='#' alt='' pic='/product.png'
            title='2013 Bayer Customer Relationship Management Animal Brazil (Orbium/SAP CRM)'
            description='Desenvolvimento de processos e ferramentas para interfaciar com o SAP gerenciando os atendimentos ao consumidor da área veterinária.' />

          <Project url='#' alt='' pic='/product.png'
            title='2013 Bayer Customer Relationship Management Animal Brazil (Orbium/SAP CRM)'
            description='Migração da operação baseada em Orbium para o SAP CRM.' />

          <Project url='#' alt='' pic='/product.png'
            title='2009 Merck Sharp & Dohme Load Balance Calls Contact Center'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2008 Bayer Business Intelligence Contact Center'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2008 Merck Sharp & Dhome Recall Arcoxia do varejo'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2006 Merck Sharp & Dhome Contact Center Argentina.'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2006 Merck Sharp & Dhome Contact Center Brazil.'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2004 Merck Sharp & Dhome Contact Center México.'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2004 Merck Sharp & Dhome Programa de Relacionamento Cozaar/Hyzaar'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2004 Merck Sharp & Dhome Recall Vioxx do varejo'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2003 Merck Sharp & Dhome Data Warehouse & Business Intelligence'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='2003 Merck Sharp & Dhome Programa de Relacionamento Renitec/Corenitec'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='1997-2002 Plusoft desenvolvimento nicho Farmacovigilância para Industria Farmacêutica'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='1998 Bayer Shering Recall Microvlar "pílula de farinha"'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='1992 FMUSP Gestão do Registro Produção Científica Medicina USP'
            description='' />

          <Project url='#' alt='' pic='/product.png'
            title='1989 FMUSP Automatização do Vestibular de Residência Médica USP'
            description='' />
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
