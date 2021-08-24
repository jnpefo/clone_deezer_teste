import React from 'react';

function CardArtist ({ img, name }) {
  return (
    <div>
      <img src={img} alt="imagem"/>
      <p><b>Autor:</b> {name}</p>
    </div>
  );
}

export default CardArtist;
