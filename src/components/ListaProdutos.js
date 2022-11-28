
import CardProduto from "./CardProduto"

export default function ListaProdutos(props) {
    const { produtos, adicionarItemNoCarrinho } = props
    return (
        <>
            {produtos.map((prod) => <CardProduto key={prod.id} produto={prod} adicionarItemNoCarrinho={adicionarItemNoCarrinho}/>)}
        </>
    )
}

