import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Listap from "../components/Listap";
import "../App.css";

function Pedidos() {
  const localUser = JSON.parse(localStorage.getItem("bookshop"));
  const [pedidos, setpedidos] = useState([]);
  //  const token = authorization?.replace("Bearer ", "");
  useEffect(() => {
    const URL = `http://localhost:5000/meus-pedidos`;

    const promisse = axios.get(URL, {
      headers: {
        Authorization: `Bearer ${localUser.token}`,
      },
    });

    promisse.then((res) => {
      setpedidos(res.data);
    });

    promisse.catch((err) => {
      console.log(err.response.data);
    });
  }, []);
  if (pedidos.length !== undefined) {
    pedidos.map((pedido, index1) => {
      pedido.pedido.map((p) => {
        console.log(p);
      });
    });
  }
  return (
    <main>
      <div className="meus_livros">
      <div className="meus_pedidos">
        <ul>
          {pedidos &&
            pedidos.map((pedido, index) => (
              <li key={index}>
                <h2>{pedido.date}</h2>
                {pedido.pedido.map((p) => (
                  <Listap key={p.id} lista={p} />
                ))}
              </li>
            ))}
        </ul>
      </div>
      <div>
      <Link to={"/"}>
        <button>Voltar para home</button>
      </Link>
      </div>
      </div>
    </main>
  );
}
export default Pedidos;
