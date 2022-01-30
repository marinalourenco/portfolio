import React from 'react';
import * as S from './styles';
import {BsLinkedin} from 'react-icons/bs';

function Contato() {
  return(
      
<S.Container id="contact" className="container-fluid bg-grey">
  <S.Box className="text-center">CONTATO</S.Box>
  <S.Contato className="row">
    <div className="col-sm-12 text-center">
      <S.Descricao>Agende seu horário!</S.Descricao>
      <S.Descricao><span className="glyphicon glyphicon-envelope"></span> marinalourenco_@hotmail.com</S.Descricao>
      <S.Descricao><span className="glyphicon glyphicon-envelope"></span> marinarquitet@gmail.com</S.Descricao>
      
      
     
    </div>
   </S.Contato>
</S.Container>
  );
}

export default Contato;