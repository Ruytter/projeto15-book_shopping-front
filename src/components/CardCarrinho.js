
export default function CardCarrinho({
  removerItemDoCarrinho,
  produto: { id, nome, imagem, preco }
}) {
  return (
      <div className="carrinho">
        <img src={imagem} alt="" />
        <div>
          <strong>{nome}</strong>
          <p>{preco}</p>
        </div>
        <button onClick={() => removerItemDoCarrinho(id)}>X</button>
      </div>
  );
}

// const ItemCarrinho = styled.div`
//   border: 1px solid black;
//   display: flex;
//   margin: 10px;
//   padding: 10px;
//   justify-content: space-between;
//   align-items: center;

//   img {
//     width: 50px;
//     height: 50px;
//   }

//   div {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }

//   strong {
//     margin-bottom: 5px;
//   }
// `
