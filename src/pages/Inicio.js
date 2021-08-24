import React from 'react';
import { useSelector } from 'react-redux'
// import { Button } from '../style/style';


function Inicio () {
  const { fetchChart } = useSelector((state) => state)
  console.log(fetchChart);
  if (Object.keys(fetchChart).length === 0 || fetchChart.action.state.isAxiosError) {
    return <div> Carregando .....</div>;
  } else {
    const { action: { state } } = fetchChart
    const capitalize = str => {
      if (typeof str !== 'string') {
        return '';
      }
      return str.charAt(0).toUpperCase() + str.substr(1);
    }

    console.log(state.tracks.data[0]);
    return (
      <>
        <h1>Clone Deezer - jnpefo</h1>
        <div>
          <h3>Estilos { capitalize(state.tracks.data[0].type) }</h3>
          <div> 
            <h4>Titulo: {state.tracks.data[0].title}</h4>
            <img src={state.tracks.data[0].album.cover_medium} alt="imagem"/>
            <p>Artista: {state.tracks.data[0].artist.name}</p>
            <audio id="player" controls="controls">
              Amostra
            <source src={state.tracks.data[0].preview} type="audio/mp3" />
            </audio>
          </div>
        </div>
        {/* <Button>Normal</Button>
        <Button>Themed</Button> */}
      </>
    );
  }
}

export default Inicio;
