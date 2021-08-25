import React from 'react';
import { useSelector } from 'react-redux'
import CardPlaylist from '../components/CardPlaylist';
import CardPodcast from '../components/CardPodcast';
import CardAmostra from '../components/CardAmostra';
import CardArtist from '../components/CardArtist';
import { Grid, Corpo } from '../style/style';


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
      <div>
        <Corpo>
          <h1>Clone Deezer - jnpefo</h1>
          <h3>Amostra</h3>
        </Corpo>
        <Grid>
          {faixas?.map((faixa) => (
              <CardAmostra
                key={faixa.id}
                img={faixa.artist.picture_medium}
                artista={faixa.artist.name}
                titulo={faixa.title}
                link={faixa.preview}
              />
          ))}
        </Grid>
        <Corpo>
        <h3>PodCasts</h3>
        </Corpo>
        <Grid>
          {podcasts?.map((podcast) => (
              <CardPodcast
                key={podcast.id}
                img={podcast.picture_medium}
                description={podcast.description}
                titulo={podcast.title}
              />
          ))}
        </Grid>
        <Corpo>
        <h3>Playlists</h3>
        </Corpo>
        <Grid>
          {playlists?.map((playlist) => (
              <CardPlaylist
                key={playlist.id}
                img={playlist.picture_medium}
                autor={playlist.user.name}
                titulo={playlist.title}
              />
          ))}
        </Grid>
        <Corpo>
        <h3>Artistas</h3>
        </Corpo>
        <Grid>
          {artists?.map((artist) => (
              <CardArtist
                key={artist.id}
                img={artist.picture_medium}
                name={artist.name}
              />
          ))}
        </Grid>
        <Corpo>
        <h3>Albuns</h3>
        </Corpo>
        <Grid>
          {albums?.map((album) => (
              <CardArtist
                key={album.artist.id}
                img={album.artist.picture_medium}
                name={album.artist.name}
              />
          ))}
        </Grid>
        <Corpo>
        <h3>Cover</h3>
        </Corpo>
        <Grid>
          {albums?.map((album) => (
              <CardArtist
                key={album.id}
                img={album.cover_medium}
                name={album.title}
              />
          ))}
        </Grid>
      </div>
    );
  }
}

export default Inicio;
