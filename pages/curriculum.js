import Head from 'next/head'
import styles from '../styles/Curriculum.module.css'

export default function Curriculum() {
  return (
    <div className={styles.container}>
      <img src="/cv.rodneyrinaldi.gif" alt="curriculum rodneyrinaldi" className={styles.logo} />
    </div>
  )
}
