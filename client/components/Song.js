import React from "react";

function Song({ song, trackNumber, artistName, start, setCurrentSong, currentSong }) {
  return (
    <tr className={currentSong.id === song.id ? 'active' : ''}>
      <td>
        {currentSong.id === song.id ?
          <></> :
          <i className="fa fa-play-circle" 
            onClick={()=>{
              start(song.audioUrl);
              setCurrentSong(song);
            }}/>
        } 
      </td>
      <td>{trackNumber}</td>
      <td>{song.name}</td>
      <td>{artistName}</td>
      <td>{song.genre}</td>
    </tr>
  );
}

export default Song;
