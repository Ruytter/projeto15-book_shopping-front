import logo from "./logo.png";
import Sign from "./pages/Login";
import Home from "./pages/Home";
import React, { useState } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./pages/auth.js";
// import styled from "styled-components";
import "./App.css";

function App() {
  const [quant, setQuant] = useState(0);
  const [showcar, setShowcar] = useState("sidebar");
  const [classe, setClasse] = useState("hide");
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <header>
            <div>
              <img src={logo} className="App-logo" alt="logo" />
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
              <p className={classe === "hide" ? "" : "hide"}  onClick={() => setClasse("hide")}>Log-in</p>
              </Link>
              <p className={classe}>Sign-up</p>
              </div>
            </section>
          </header>
          <Routes>
            <Route path="/sign-in" element={<Sign setClasse={setClasse} classe={classe} />}></Route>
            <Route path="/sign-up" element={<Sign />}></Route>
            <Route
              path="/"
              element={
                <Home
                  quant={quant}
                  setQuant={setQuant}
                  showcar={showcar}
                  setShowcar={setShowcar}
                />
              }
            ></Route>
            {/* <Route path="/fecharpedido" element={<Registrar />}></Route> */}
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
// const Container = styled.div`
//   width: 414px;
//   min-height: 600px;
//   margin: 75px auto;
// `;
