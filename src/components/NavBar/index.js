import React from 'react';
import * as S from "./styles"

function NavBar() {
  return (
  <S.Nav className="navbar navbar-default navbar-fixed-top">
  <S.Container className="container">
    <S.NavbarHeader className="navbar-header">
      <S.Botao type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <S.IconBar className="icon-bar"></S.IconBar>
        <S.IconBar className="icon-bar"></S.IconBar>
        <S.IconBar className="icon-bar"></S.IconBar>                        
      </S.Botao>
      <S.NavbarBrand className="navbar-brand" href="#myPage">Marina Lourenço</S.NavbarBrand>
    </S.NavbarHeader>
    <S.CollapseNavbarCollapse className="collapse navbar-collapse" id="myNavbar">
      <S.NavNavbarRight className="nav navbar-nav navbar-right">
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#services">Trabalhos</a></li>
        <li><a href="#courses">Cursos</a></li>
        <li><a href="#contact">Contato</a></li>
      </S.NavNavbarRight>
    </S.CollapseNavbarCollapse>
  </S.Container>
</S.Nav>
  );
}

export default NavBar;