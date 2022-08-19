import React from "react";

function Album({ album, selectAlbum }) {
  return (
    <div className="album">
      <a
        onClick={() => {
          selectAlbum(album.id);
        }}
      >
        <img src={album.artworkUrl} />
        <p>{album.name}</p>
        <small>{album.artist.name}</small>
      </a>
    </div>
  );
}

export default Album;
