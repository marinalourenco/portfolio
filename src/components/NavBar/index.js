import React from 'react';
import * as S from "./styles"

function NavBar() {
  return (
  <S.Nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#myPage">Marina Lourenco</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#services">Servicos</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#courses">cursos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </div>
  </div>
</S.Nav>
  );
}

export default NavBar;