
import React from 'react';

import * as S from './styles';

function Cursos() {
  return(
    <S.Container id="courses" className="container-fluid bg-white">
    <S.Box className="text-center">
      <S.Titulo>CURSOS</S.Titulo>
      <S.Texto>Estou cursando Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá (Previsão de término em 2023.1), desenvolvi trabalhos acadêmicos utilizando Java e JavaScript (ReactJS, NodeJS). Realizei cursos extras de formação básica em HTML, CSS e JavaScript pela PrograMaria (Turma 8 - carga horária: 16 horas), React: Abstraindo seu CSS com Styled Components pela plataforma da Alura (carga horária: 6 horas), Figma: Trabalhando na construção de um Design System (carga horária: 12 horas - Alura).</S.Texto>
    </S.Box>
  </S.Container>
  );  
 }

export default Cursos;