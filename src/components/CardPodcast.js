import React from 'react';
import { Card } from '../style/style';


function CardPodcast ({ img, description, titulo }) {
  return (
    <Card>
      <img src={img} alt="imagem"/>
      <h4>Titulo: {titulo}</h4>
      <p><b>Descrição:</b> {description}</p>
    </Card>
  );
}

export default CardPodcast;
