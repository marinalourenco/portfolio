import React from 'react';
import * as S from './styles';

function Services({repositories}) {
  return (
    <S.Container id="services" className="container-fluid text-center bg-grey">
        <S.Titulo>TRABALHOS</S.Titulo>
        <S.Texto>Confira alguns trabalhos realizados:</S.Texto>
        <br/>
        <S.Box className="row">
            {repositories.map(repository => (
            <S.Descricao className="col-sm-6 text-center" href={repository.html_url}>
            <S.Projeto>{repository.name}</S.Projeto>
            <S.Linguagem>{repository.language ? repository.language:'N/A'}</S.Linguagem>
            </S.Descricao>
            ))}
        </S.Box>
     </S.Container>

  );
}

export default Services;