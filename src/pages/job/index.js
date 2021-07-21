import React from 'react'
import Link from 'next/link'

import styles from './index.module.css'

function Job() {
  return (
    <>
      <Link href='/'>
        <a href='/'>
          <div className={styles.row}>
            <p>Prezados,</p>
            <p>Em busca de uma oportunidade na área de projetos e tecnologia, apresento-lhes meu currículo.</p>
            <p>Dentre minhas características pessoais destaca-se o comprometimento, senso de pertencimento e busca continuada pelo conhecimento. Nas profissionais destaca-se a experiência em gerenciamento de contas e projetos, administração de dados, desenvolvimento de soluções e gestão de produtos e portfólios.</p>
            <p>Informo ainda que tenho disponibilidade para viagens.</p>
            <p>No aguardo de um contato, coloco-me à disposição.</p>
            <br />
            <br />
            <p>Cordialmente,</p>
            <p>Rodney Rinaldi</p>
            <br />
            <Link href='/'>
              <a href='/'>
                http://dev.rodneyrinaldi.com
              </a>
            </Link>
          </div>
        </a>
      </Link>
    </>
  )
}

export default Job