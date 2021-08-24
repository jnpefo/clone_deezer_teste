import React from 'react';

function CardAmostra ({ img, artista, titulo, link }) {
  return (
    <div>
      <img src={img} alt="imagem"/>
      <p>Artista: {artista}</p>
      <h4>Titulo: {titulo}</h4>
      <audio id="player" controls="controls">
      <source src={link} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default CardAmostra;
