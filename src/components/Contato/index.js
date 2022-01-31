import React from 'react';
import * as S from './styles';
import {BsLinkedin, BsGithub} from 'react-icons/bs';


function Contato() {
  return(
      
<S.Container id="contact" className="container-fluid bg-grey">
  <S.Box className="text-center">CONTATO</S.Box>
  <S.Contato className="row">
    <div className="col-sm-12 text-center">
      <S.Descricao>Agende seu horário!</S.Descricao>
      <S.Descricao><span className="glyphicon glyphicon-envelope"></span> marinalourenco_@hotmail.com</S.Descricao>
      <S.Descricao><span className="glyphicon glyphicon-envelope"></span> marinarquitet@gmail.com</S.Descricao>
      
      <S.Descricao> 
        <S.BotaoLinkedin href='https://www.linkedin.com/in/marina-louren%C3%A7o-4969b11b6/'>
        <BsLinkedin size={36}></BsLinkedin>
        </S.BotaoLinkedin>
        <S.BotaoGithub href='https://github.com/marinalourenco'>
        <BsGithub size={36}></BsGithub>
        </S.BotaoGithub>
      </S.Descricao>
     
      
      
      
     
    </div>
   </S.Contato>
</S.Container>
  );
}

export default Contato;