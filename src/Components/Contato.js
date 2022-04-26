import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'


const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <img src={foto} alt='Máquina de escrever' />
      <div>
        <h1>Entre em Contato</h1>
        <ul className={styles.dados}>
          <li>mau_oliver@hotmail.com</li>
          <li>9999-9999</li>
          <li>Rua Gen Sev Prestes</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato