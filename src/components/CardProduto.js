// import styled from "styled-components"

export default function CardProduto(props) {
  const { adicionarItemNoCarrinho, produto } = props;
  const { imagem, preco } = produto;

  return (
    <div className="livro">
      <article>
        <div>
          <img src={imagem} alt="livro" />
        </div>
        <p>
          <span onClick={() => adicionarItemNoCarrinho(produto)}>Adicionar ao carrinho</span>
          <span className="preco">{preco}</span>
        </p>
      </article>
    </div>

    // <>
    //     <img src={imagem} alt= "" />
    //     <div>
    //         <p>{nome}</p>
    //         <p>{preco}</p>
    //     </div>

    //     <button onClick={() => adicionarItemNoCarrinho(produto)}>Comprar</button>
    // </>
  );
}

// const ItemProduto = styled.div`
//   border: 1px solid black;
//   width: 200px;
//   display: flex;
//   flex-direction: column;
//   margin: 10px;
//   padding: 10px;

//   img {
//     width: 200px;
//     height: 200px;
//   }

//   div {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin: 10px 0;
//   }

// 	button {
// 		width: 100%;
// 	}
// `;
