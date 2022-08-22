import React from "react";
import Axios from 'axios'

function Player({currentSong, audio, playStatus, setPlayStatus, start, setCurrentSong}) {

  audio.addEventListener('ended', () => {nextSong()})
  let albumId = Number(currentSong.albumId)
  async function nextSong() {
    try {
      const {data} = await Axios.get(`/api/albums/${albumId}`);
      let songs = data.songs;
      let length = songs.length;
      let currentIndex = songs.findIndex(song => song.id === currentSong.id)
      let nextIndex = (currentIndex + 1)%length
      let nextSong = songs[nextIndex]
      start(nextSong.audioUrl)
      setCurrentSong(nextSong)
    } catch (err) {
      console.err("Error going to next song", err)
    }
  }
  async function prevSong() {
    try {
      const {data} = await Axios.get(`/api/albums/${albumId}`);
      let songs = data.songs;
      let length = songs.length;
      let currentIndex = songs.findIndex(song => song.id === currentSong.id)
      let nextIndex = currentIndex > 0 ?(currentIndex - 1) : length - 1
      let nextSong = songs[nextIndex]
      start(nextSong.audioUrl)
      setCurrentSong(nextSong)
    } catch (err) {
      console.err("Error going to next song", err)
    }
  }

  return (currentSong.id ?
    <div id="player-container">
      <div id="player-controls">
        <div className="row center">
          <i className="fa fa-step-backward" onClick={()=>{prevSong()}}></i>
          <i className={playStatus ? "fa fa-pause-circle" : "fa fa-play-circle" }
              onClick={()=> {
                if (playStatus) {
                  audio.pause();
                } else {
                  audio.play();
                }
                setPlayStatus(!playStatus)
              }}></i>
          <i className="fa fa-step-forward"
            onClick={() => {
              nextSong()
            }}></i>
        </div>
      </div>
    </div> :
    <></>
  );
}

export default Player;
