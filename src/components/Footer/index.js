import React from 'react';
import * as S from './styles';

function Footer() {
  return(
    <S.Footer className="container-fluid text-center">
    <S.MyPage href="#myPage" title="To Top">
      <span className="glyphicon glyphicon-chevron-up"/>
    </S.MyPage>
    <S.Paragrafo>Feito por Marina Lourenço</S.Paragrafo>
    </S.Footer>
     
    );
  }
  
export default Footer;