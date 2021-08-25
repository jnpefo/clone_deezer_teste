import React from 'react';
import { Card } from '../style/style';

function CardPlaylist ({ img, autor, titulo }) {
  return (
    <Card>
      <img src={img} alt="imagem"/>
      <h4>Titulo: {titulo}</h4>
      <p><b>Autor:</b> {autor}</p>
    </Card>
  );
}

export default CardPlaylist;
