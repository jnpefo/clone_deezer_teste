import React from 'react';

function CardPodcast ({ img, description, titulo }) {
  return (
    <div>
      <img src={img} alt="imagem"/>
      <h4>Titulo: {titulo}</h4>
      <p><b>Descrição:</b> {description}</p>
    </div>
  );
}

export default CardPodcast;
