import ListaProdutos from "../components/ListaProdutos";
import PRODUTOS from "../products";
import Carrinho from "../components/Carrinho";
import { useState } from "react";
import axios from "axios";

function Home(props) {
  
  const { setUser, quant, setQuant, showcar, setShowcar } = props;
  const [carrinho, setCarrinho] = useState([]);
  if (JSON.parse(localStorage.getItem("bookshop"))){
    const localUser = JSON.parse(localStorage.getItem("bookshop"));
    setUser(localUser.user)
  }
  function removerItemDoCarrinho(idParaDeletar) {
    const novoCarrinho = carrinho.filter(
      (produto) => produto.id !== idParaDeletar
    );
    setCarrinho(novoCarrinho);
    const newquant = quant - 1;
    setQuant(newquant);
    if (newquant === 0) {
      setShowcar("sidebar");
    }
  }

  function adicionarItemNoCarrinho(item) {
    const estaNoArray = carrinho.some((prod) => prod.id === item.id);
    if (!estaNoArray) {
      const novoCarrinho = [...carrinho, item];
      setCarrinho(novoCarrinho);
      const newquant = quant + 1;
      setQuant(newquant);
    }
  }

  function fecharCompra(e) {
    e.preventDefault();
    const User = JSON.parse(localStorage.getItem("bookshop"));
    const URL = "http://localhost:5000/pedidos";
    const body = {
      carrinho,
    };
    const promise = axios.post(URL, body, {headers: {
      Authorization: `Bearer ${User.token}`,
    },});
    promise.then((pedidos) => {
      console.log(pedidos.data);
      setCarrinho([])
      setQuant(0)
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
    setShowcar("sidebar");
  }

  return (
    <>
      <main>
        <ListaProdutos
          produtos={PRODUTOS}
          carrinho={carrinho}
          adicionarItemNoCarrinho={adicionarItemNoCarrinho}
        />
      </main>
      <div className={showcar}>
        <button className="comprar">Lista de pedidos</button>
        <Carrinho
          carrinho={carrinho}
          removerItemDoCarrinho={removerItemDoCarrinho}
        />
        <div className="fechar_compra">
          <button onClick={() => setShowcar("sidebar")}>X</button>
          <button className="comprar" onClick={(e) => fecharCompra(e)}>
            Fechar compra
          </button>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Home;
