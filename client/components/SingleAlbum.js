import React from "react";
import SongList from "./SongList";

function SingleAlbum({ album, start, setCurrentSong, currentSong }) {
  return (
    <div className="container">
      <div id="single-album" className="column">
        <div className="album">
          <a>
            <img src={album.artworkUrl} />
            <p>{album.name}</p>
            <small>{album.artist.name}</small>
          </a>
        </div>
        <SongList 
          songs={album.songs} 
          artistName={album.artist.name} 
          start={start} 
          setCurrentSong={setCurrentSong}
          currentSong={currentSong}
        />
      </div>
    </div>
  );
}

export default SingleAlbum;
