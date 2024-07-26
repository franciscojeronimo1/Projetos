import { useRef, useState } from "react"
import { v4 } from 'uuid'
import { AddButton,  Container, Product } from './styles'

function Home() {

  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()



  function cliqueiNoBotao() {

    setProdutos([
      {
        id: v4(),
        nome: inputRef.current.value}, ...produtos])
        inputRef.current.value = ''

  }

  function deletarProduto(id) {
    setProdutos(produtos.filter(produtos => produtos.id !== id))
  }

  return (
    < Container>
      <h1>Lista de compras</h1>
      <input  placeholder="produto..." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>
      {
        produtos.map(produtos => (
          <Product key={produtos.id}>
            <p >{produtos.nome}</p>
            <button onClick={() => deletarProduto(produtos.id)}>🗑</button>
          </Product>
        ))
      }

    </Container>

  )
}

export default Home
