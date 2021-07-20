import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'
import Menu from '../components/menu'

import styles from '../styles/index.module.css'

function Index() {
  return (
    <>
      <Layout showback='no'>
        <div className={styles.grid}>
          <Menu
            url='/skills'
            alt='competências'
            pic='/menu/skills.png'
            title='COMPETÊNCIAS'
            description='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'
          />
          <Menu
            url='/curriculum'
            alt='curriculum'
            pic='/menu/curriculo.png'
            title='CURRÍCULO'
            description='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
          />
          <Menu
            url='/portfolio'
            alt='portfolio'
            pic='/menu/portfolio.png'
            title='PORTFÓLIO'
            description='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
          />
          <Menu
            url='/manifest'
            alt='manifesto'
            pic='/menu/manifesto.png'
            title='MANIFESTO'
            description='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
          />
        </div>
      </Layout>
    </>
  )
}

export default Index