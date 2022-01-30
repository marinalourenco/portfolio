import React from 'react';
import * as S from './styles';

function SobreMim() {
  return(
    <S.Container id="about" className="container-fluid bg-white">
    <S.Box className="row">
      <S.ConfigurarTexto className="col-sm-8">
        <S.Titulo>Olá, Mundo!</S.Titulo><br/>
            <S.Texto>
                Me chamo Marina Lourenço, natural e residente na cidade mais arretada do Brasil - Recife - nossa Veneza Brasileira. Sou formada em Arquitetura e Urbanismo pela Universidade Federal de Pernambuco, mas durante a pandemia do Covid-19, decidi mudar de carreira e mergulhei de cabeça no universo da tecnologia, universo este que além de nos proporcionar facilidade, produtividade e entretenimento, pode ser um grande aliado na educação, saúde e segurança, por exemplo, para promover qualidade de vida e bem-estar para as pessoas. E é este meu objetivo: tornar meu trabalho útil e relevante na sociedade.
            </S.Texto><br/>
      </S.ConfigurarTexto>
      <div className="col-sm-3 img-back"/>
      </S.Box>
  </S.Container>
  );
}

export default SobreMim;