import React, { useContext, useState } from "react";
import { AuthContext } from "./auth.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Sign(props) {
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();
   const { classe, setClasse } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [confirmpass, setConfimpass] = useState("");

  function Cadastrar(e) {
    e.preventDefault();
    if (password !== confirmpass) {
      return alert("As senha devem ser iguais");
    }
    const URL = "http://localhost:5000/sign-up";
    const body = {
      name,
      email,
      password,
    };
    const promise = axios.post(URL, body);
    promise.then((user) => {
      console.log(user.data);
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
    navigate(`/sign-in`);
    setClasse("")
  }
  function Entrar(e) {
    e.preventDefault();


    const URL = "http://localhost:5000/sign-in";
    const body = {
      email,
      password,
    };
    console.log(body)
    const promise = axios.post(URL, body);
    promise.then((user) => {
      signin(user.data);
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  }

  return (
    <section className="login">
      <input
        className={classe}
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <input
        type="email"
        id="email"
        nome="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        required
      />
      <input
        type="password"
        id="pass"
        nome="pass"
        value={password}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
        required
      />
      <input
        className={classe}
        type="password"
        id="confirmpass"
        nome="confirmpass"
        value={confirmpass}
        onChange={(e) => setConfimpass(e.target.value)}
        placeholder="Confirme a senha"
        required
      />
      <button
        className={classe === "hide" ? "" : "hide"}
        onClick={(e) => Entrar(e)}
      >
        Entrar
      </button>
      <button className={classe} onClick={(e) => Cadastrar(e)}>
        Cadastrar
      </button>
      <footer>
        <Link to={`/sign-up`}>
          <p className={classe === "hide" ? "" : "hide"} onClick={() => setClasse("")}>
            Primeira vez? Cadastre-se!
          </p>
        </Link>
      </footer>
    </section>
  );
}

