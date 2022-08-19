import React from "react";
import SongList from "./SongList";

function SingleAlbum({ album }) {
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
        <SongList songs={album.songs} artistName={album.artist.name} />
      </div>
    </div>
  );
}

export default SingleAlbum;
