import React from 'react';
import { useSelector } from 'react-redux'
import CardPlaylist from '../components/CardPlaylist';
import CardPodcast from '../components/CardPodcast';
import CardAmostra from '../components/CardAmostra';
import CardArtist from '../components/CardArtist';
// import { Button } from '../style/style';


function Inicio () {
  const { fetchChart } = useSelector((state) => state)
  if (Object.keys(fetchChart).length === 0 || fetchChart.action.state.isAxiosError) {
    return <div> Carregando .....</div>;
  } else {
    const faixas = fetchChart.action.state.tracks.data;
    const podcasts = fetchChart.action.state.podcasts.data;
    const playlists = fetchChart.action.state.playlists.data;
    const artists = fetchChart.action.state.artists.data;
    const albums = fetchChart.action.state.albums.data;

    return (
      <>
        <h1>Clone Deezer - jnpefo</h1>
        <div>
          <h3>Amostra</h3>
          {faixas?.map((faixa) => (
              <CardAmostra
                key={faixa.id}
                img={faixa.artist.picture_medium}
                artista={faixa.artist.name}
                titulo={faixa.title}
                link={faixa.preview}
              />
          ))}
        </div>
        <div>
          <h3>PodCasts</h3>
          {podcasts?.map((podcast) => (
              <CardPodcast
                key={podcast.id}
                img={podcast.picture_medium}
                description={podcast.description}
                titulo={podcast.title}
              />
          ))}
        </div>
        <div>
          <h3>Playlists</h3>
          {playlists?.map((playlist) => (
              <CardPlaylist
                key={playlist.id}
                img={playlist.picture_medium}
                autor={playlist.user.name}
                titulo={playlist.title}
              />
          ))}
        </div>
        <div>
          <h3>Artistas</h3>
          {artists?.map((artist) => (
              <CardArtist
                key={artist.id}
                img={artist.picture_medium}
                name={artist.name}
              />
          ))}
        </div>
        <div>
          <h3>Albuns</h3>
          {albums?.map((album) => (
              <CardArtist
                key={album.artist.id}
                img={album.artist.picture_medium}
                name={album.artist.name}
              />
          ))}
        </div>
        <div>
          <h3>Cover</h3>
          {albums?.map((album) => (
              <CardArtist
                key={album.id}
                img={album.cover_medium}
                name={album.title}
              />
          ))}
        </div>
        {/* <Button>Normal</Button>
        <Button>Themed</Button> */}
      </>
    );
  }
}

export default Inicio;
