import React from 'react';
import { Card } from '../style/style';


function CardArtist ({ img, name }) {
  return (
    <Card>
      <img src={img} alt="imagem"/>
      <p><b>Autor:</b> {name}</p>
    </Card>
  );
}

export default CardArtist;
