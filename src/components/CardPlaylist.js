import React from 'react';

function CardPlaylist ({ img, autor, titulo }) {
  return (
    <div>
      <img src={img} alt="imagem"/>
      <h4>Titulo: {titulo}</h4>
      <p><b>Autor:</b> {autor}</p>
    </div>
  );
}

export default CardPlaylist;
