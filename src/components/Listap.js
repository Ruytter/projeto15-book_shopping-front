export default function Listap({ lista }) {
  return (
    <div className="lista">
      <img src={lista.imagem} alt="" />

      <strong>{lista.nome}</strong>
      <p>{lista.preco}</p>
    </div>
  );
}
