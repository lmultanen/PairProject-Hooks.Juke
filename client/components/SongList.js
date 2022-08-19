import React from "react";
import Song from "./Song";

function SongList({ songs, artistName }) {
  console.log(songs, "SONGLIST");
  return (
    <table id="songs">
      <tbody>
        <tr className="gray">
          <td />
          <td>#</td>
          <td>Name</td>
          <td>Artist</td>
          <td>Genre</td>
        </tr>
        {songs.map((song, idx) => {
          return (
            <Song
              key={idx}
              trackNumber={idx + 1}
              song={song}
              artistName={artistName}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default SongList;
