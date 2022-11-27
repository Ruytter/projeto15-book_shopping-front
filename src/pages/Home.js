import ListaProdutos from "../components/ListaProdutos";
import PRODUTOS from "../products";
import Carrinho from "../components/Carrinho";
import { useState } from "react";

function Home(props) {
  const{ quant,
  setQuant,
  showcar,
  setShowcar}=props
  const [carrinho, setCarrinho] = useState([]);

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

  function fecharCompra() {
    console.log("fechou");
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
        <Carrinho
          carrinho={carrinho}
          removerItemDoCarrinho={removerItemDoCarrinho}
        />
        <div className="fechar_compra">
          <button onClick={() => setShowcar("sidebar")}>X</button>
          <button className="comprar" onClick={() => fecharCompra()}>
            Fechar compra
          </button>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Home;
