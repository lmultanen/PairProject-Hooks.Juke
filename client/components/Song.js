import React from "react";

function Song({ song, trackNumber, artistName }) {
  console.log(song);
  return (
    <tr>
      <td>
        <i className="fa fa-play-circle" />
      </td>
      <td>{trackNumber}</td>
      <td>{song.name}</td>
      <td>{artistName}</td>
      <td>{song.genre}</td>
    </tr>
  );
}

export default Song;
