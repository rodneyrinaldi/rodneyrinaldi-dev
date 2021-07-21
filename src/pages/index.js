import React from 'react'

import Layout from '../components/layout'
import Menu from '../components/menu'

import styles from '../styles/index.module.css'

function Index() {
  return (
    <>
      <Layout showback='no' showcard='yes'>
        <div className={styles.grid}>
          <Menu
            url='/skills'
            alt='competências'
            pic='/menu/skills.png'
            title='COMPETÊNCIAS'
            description='Conhecimentos em programação backend, frontend e mobile. Banco de dados relacionais e não relacionais. Habilidades em projeto e arquitetura de sistemas. Atitude autodidata, proativa e disciplinada.'
          />
          <Menu
            url='/curriculum'
            alt='curriculum'
            pic='/menu/curriculum.png'
            title='CURRÍCULO'
            description='Dados pessoais, histórico profissional, projetos e desafios. Formação acadêmica e desenvolvimento pessoal autodidata.'
          />
          <Menu
            url='/portfolio'
            alt='portfolio'
            pic='/menu/portfolio.png'
            title='PORTFÓLIO'
            description='Carteira de projetos arquitetados, desenvolvidos e implantados em ordem cronológica de entrega.'
          />
          <Menu
            url='/manifest'
            alt='manifesto'
            pic='/menu/manifest.png'
            title='MANIFESTO'
            description='Compromisso aberto de qualidade, segurança e sustentbiliade. Missão, visão e valores aplicados. Compromisso com a conformidade e privacidade na pesquisa e desenvolvimento.'
          />
        </div>
      </Layout>
    </>
  )
}

export default Index