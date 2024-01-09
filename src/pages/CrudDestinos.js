import { React, useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../styles/cruddestinos.module.css"

import Img from '../components/Imagens/GetImgDestinos'
import Footer from '../components/Footer';

const CrudDestinos = () => {
    const [destinos, setDestinos] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/destinos")
            .then((response) => {
                setDestinos(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de Destinos:", error);
            });
    }, []);
    
    return (
        <>

            <main>

                <h2 className="mt-5 text-light text-center">Lista de Destinos</h2>
                 <p className="text-light text-center">Obs 1: Add Destino direto no banco</p>
                 <p className="mb-4 text-light text-center">Obs 2: Rota GetIdDestino no menu</p>
              
                <div className="container">
                    {destinos.map((element) => (

                        <div className="clearfix text-light" key={element.idDestino}>
                           <button className="btn btn-outline-light mb-2 mt-2">ID : {element.idDestino}</button>
                            <Img
                                img={element.imgUrl}
                                alt="Rio"
                                className="col-md-6 float-md-end mb-3 ms-md-3"
                            />
                            <h5 className="clearfix-title">{element.nome}</h5>
                            <p>
                            {element.descricao}
                            </p>
                            <div className="but">
                                <button type="button" className="btn btn-outline-light mb-3">
                                    R$ {element.preco}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer></Footer>
        </>
    );
};

export default CrudDestinos;