import React from 'react';
import * as S from './styles';

function Usuario() {
  return(
    <S.Container className="jumbotron text-center">
    <S.Avatar className="avatar" src="https://avatars.githubusercontent.com/u/71576230?v=4" /> 
      <S.Linguagens>| React | NodeJS | HTML | CSS |</S.Linguagens> 
    </S.Container>
  );
}

export default Usuario;