import Contact from '../components/contact'
import styles from '../styles/manifesto.module.css'

export default function Manifesto() {
  function handlePhone() {
    alert('11 98141.7040')
  }

  return (
    <div id='toppage' name='toppage' className={styles.container}>

      <Contact showback='yes' />

      <div className={styles.line}>
        <h1><strong>Portfólio</strong></h1>
      </div>

      <div className={styles.line}>
      </div>

    </div>
  )
}
