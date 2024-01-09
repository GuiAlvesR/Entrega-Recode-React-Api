import React, { useState } from "react";
import axios from "axios";
import "../styles/destino.module.css";
import Img from "../components/Imagens/GetImgDestinos";
import Footer from "../components/Footer";

const Destinos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [destino, setDestino] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/destinos/${searchTerm}`);
      setDestino([response.data]);
    } catch (error) {
      console.error(`Erro ao buscar o Destino com o termo ${searchTerm}:`, error);
    }
  };

  return (
    <>
      <main>
        <div className="container">
          <form className="d-flex mt-3 mb-4" onSubmit={handleSearch} role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Digite o ID do Destino"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Pesquisar
            </button>
          </form>

          {destino.length === 0 ? (
            <h2 className="mt-5 text-light text-center">Nenhum destino encontrado...</h2>
          ) : (
            destino.map((destinoItem) => (
              <div className="clearfix text-light" key={destinoItem.idDestino}>
                <button className="btn btn-outline-light">ID : {destinoItem.idDestino}</button>
                <Img
                  img={destinoItem.imgUrl}
                  alt="Rio"
                  className="col-md-6 float-md-end mb-3 ms-md-3"
                />
                <h5 className="clearfix-title">{destinoItem.nome}</h5>
                <p>
                  {destinoItem.descricao}
                </p>
                <div className="but">
                  <button type="button" className="btn btn-outline-light">
                    R$ {destinoItem.preco}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <div style={{ position: "fixed", bottom: 0, width: "100%"}}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Destinos;