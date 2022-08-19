import React from "react";
import Album from "./Album";

function AllAlbums({ albums, selectAlbum }) {
  console.log(albums);
  return (
    <div className="container">
      <div id="albums" className="row wrap">
        {albums.map((album) => {
          return (
            <Album key={album.id} album={album} selectAlbum={selectAlbum} />
          );
        })}
      </div>
    </div>
  );
}

export default AllAlbums;
