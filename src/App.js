import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import './App.css';

import Img from './components/Imagens/ImgLogo'
import Nome from './components/Nome'

import ImgLogo from './imagens/travel.jpg';

import CrudDestinos from './pages/CrudDestinos';
import Destinos from './pages/Destinos';


function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <div className="nav">
            <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
              <div className="container-fluid">
                <Img
                  img={ImgLogo}
                  alt="logo agencia"
                  width="80px"
                  height="80px"
                  className="d-inline-block align-text-top"
                />
                <Nome></Nome>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex={-1}
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      Agência Turística Noturna
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <ol className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                          {" "}
                          <Link className="nav-link active" aria-current="page" to="/cadastro">
                            Inscreva-se
                          </Link>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <Link className="nav-link active" aria-current="page" to="/login">
                            Entrar
                          </Link>
                        </li>
                      </ol>

                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">
                          Inicio
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/destinos">
                          Buscar Destinos
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/promocoes">
                          Promoções
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/contato">
                          Contato
                        </Link>
                      </li>

                    </ul>
                    <form className="d-flex mt-3" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn btn-outline-success" type="submit">
                        Pesquisar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<CrudDestinos />} />
          <Route path="/destinos" element={<Destinos />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
