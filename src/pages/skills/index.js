import React from 'react'

import Layout from '../../components/layout'
import Title from '../../components/title'
import Project from '../../components/project'

import data from '../../data/skills.json'

import styles from './index.module.css'

function Skills() {
  return (
    <>
      <Layout showback='yes'>
        <Title title="COMPETÊNCIAS" />
        <div className={styles.row}>
          {
            data.map(function (item) {
              return (
                <Project
                  url={item.url}
                  alt={item.alt}
                  pic={item.pic}
                  title={item.title}
                  description={item.description}
                />
              )
            })
          }
        </div>
      </Layout>
    </>
  )
}

export default Skills