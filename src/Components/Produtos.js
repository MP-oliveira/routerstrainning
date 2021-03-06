import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styles from './Produtos.module.css'

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null)

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then(response => response.json())
      .then(json => setProdutos(json))
  }, []);

  if (produtos === null) return null
  return (
    <section className={styles.produtos + ' animeLeft '}>
      {produtos.map(produto => (
        <Link to={`produto/${produto.id}`} className={styles.produto} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  )
}

export default Produtos