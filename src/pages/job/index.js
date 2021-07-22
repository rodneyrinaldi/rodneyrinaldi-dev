import React from 'react'
import Link from 'next/link'

import styles from './index.module.css'

function Job() {
  return (
    <>
      <Link href='/'>
        <a href='/'>
          <div className={styles.row}>
            <p>Olá,</p>
            <p>
              Meu nome é Rodney e fui desenvolvedor sênior client/server na plataforma Microsoft.
              Estou atualizado codando no ecossistema Javascript/Node/React.
              Também fui dba Oracle, experiente em SqlServer e atualizado nos bancos Postgres/Mongo/Redis.
            </p>
            <p>
              De volta ao desenvolvimento procuro uma oportunidade que me permita pegar o rítimo novamente.
              Entendo que possa haver motivos que tornem esta situação interessante para ambos.
            </p>
            <br />
            <p>Fico à disposição para contatos, obrigado.</p>
            <p>Rodney Rinaldi</p>
            <Link href='/portfolio'>
              <a href='/portfolio'>
                http://dev.rodneyrinaldi.com/portfolio
              </a>
            </Link>
          </div>
        </a>
      </Link>
    </>
  )
}

export default Job