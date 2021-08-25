import React from 'react';
import { Card } from '../style/style';


function CardAmostra ({ img, artista, titulo, link }) {
  return (
    <Card>
      <img src={img} alt="imagem"/>
      <p><b>Artista:</b> {artista}</p>
      <h4>Titulo: {titulo}</h4>
      <audio id="player" controls="controls">
      <source src={link} type="audio/mp3" />
      </audio>
    </Card>
  );
}

export default CardAmostra;
