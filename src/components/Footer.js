import React from 'react';
import { Link } from 'react-router-dom';

import Img from './Imagens/ImgLogo'
import ImgLogo from '../imagens/travel.jpg';

export default function Footer() {
  return (
    <>
      <div className="rodape">
        <section>
          <footer className="top">
            <Img img={ImgLogo} alt="Logo"></Img>
            <div className="links">
              <div>
                <h2 className="mb-3" >Plataforma</h2>
                <Link to="/contato">
                  Contato
                </Link>
              </div>
            </div>
          </footer>
          <footer className="bottom">
            <div className="legal">
              <span> © Todos os direitos ... </span>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">Licença</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">Terms and Conditions</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#"> Privacy Policy</a>

            </div>
          </footer>
        </section>
      </div>
    </>

  )

}