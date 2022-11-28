import logo from "./logo.png";
import Sign from "./pages/Login";
import Home from "./pages/Home";
import Pedidos from "./pages/Pedidos";
import React, { useState } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./pages/auth.js";
import "./App.css";

function App() {
  const [quant, setQuant] = useState(0);
  const [user, setUser] = useState("");
  const [showcar, setShowcar] = useState("sidebar");
  const [classe, setClasse] = useState("hide");
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <header>
            <div>
              <Link to={"/meus-pedidos"}>
                <h2 className="pedidos">Meus pedidos</h2>
              </Link>
              <img src={logo} className="App-logo" alt="logo" />
              <h2 className="user">Benvindo/a {user}</h2>
            </div>
            <section>
              <h1>
                <b>Online Book Shop</b>
              </h1>
              <div
                onClick={() => {
                  quant !== 0
                    ? setShowcar("sidebar showsidebar")
                    : setShowcar("sidebar");
                }}
              >
                <img
                  src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f6d2.svg"
                  className="imgcar"
                  alt="carrinho"
                />
                <p className="quant">{quant}</p>
              </div>
              <div>
                <Link to={`/sign-in`}>
                  <p
                    className={classe === "hide" ? "" : "hide"}
                    onClick={() => setClasse("hide")}
                  >
                    Log-in
                  </p>
                </Link>
                <p className={classe}>Log-out</p>
              </div>
            </section>
          </header>
          <Routes>
            <Route
              path="/sign-in"
              element={<Sign setClasse={setClasse} classe={classe} />}
            ></Route>
            <Route path="/sign-up" element={<Sign />}></Route>
            <Route
              path="/"
              element={
                <Home
                  setUser={setUser}
                  quant={quant}
                  setQuant={setQuant}
                  showcar={showcar}
                  setShowcar={setShowcar}
                />
              }
            ></Route>
            <Route path="/meus-pedidos" element={<Pedidos />}></Route>
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
