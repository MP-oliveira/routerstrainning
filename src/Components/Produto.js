import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Produto.module.css'

const Produto = () => {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError('Um erro aconteceu ao carregar o produto');
      } finally {
        setLoading(false);
      }

    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id])

  if (loading) return <div>Carregando...</div>
  if (error) return <p>{error}</p>
  if (produto === null) return null;
  return (
    <section className={styles.produto}>
      Produto
    </section>
  )
}

export default Produto