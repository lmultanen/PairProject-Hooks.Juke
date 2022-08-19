import React from "react";
import { Sidebar, AllAlbums, Player, SingleAlbum } from "./components";
import Axios from "axios";

const audio = document.createElement('audio');

const Main = () => {
  const [albums, setAlbums] = React.useState([]);
  const [selectedAlbum, setSelectedAlbum] = React.useState({});
  const [currentSong, setCurrentSong] = React.useState({})
  const [playStatus, setPlayStatus] = React.useState(false)

  async function selectAlbum(id) {
    try {
      const {data} = await Axios.get(`/api/albums/${id}`);
      setSelectedAlbum(data)
    } catch (err) {
      console.err('Error fetching album', err)
    }
  }
  function start (url) {
    // audio.src = 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3';
    audio.src = url;
    audio.load();
    audio.play();
    setPlayStatus(true)
  }

  React.useEffect(() => {
    async function getAlbums() {
      try {
        const { data } = await Axios.get("/api/albums");
        setAlbums(data);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    }
    getAlbums();
  }, []);
  if (albums.length === 0) {
    return <>Loading...</>;
  }
  return (
    <>
      <div id="main" className="row container">
        <Sidebar setSelectedAlbum={setSelectedAlbum}/>
        {!Object.keys(selectedAlbum).length ? (
          <AllAlbums albums={albums} selectAlbum={selectAlbum}/>
        ) : (
          <SingleAlbum album={selectedAlbum} start={start} setCurrentSong={setCurrentSong} currentSong={currentSong}/>
        )}
        <Player 
          currentSong={currentSong} 
          audio={audio} 
          playStatus ={playStatus} 
          setPlayStatus={setPlayStatus}
          start={start}
          setCurrentSong={setCurrentSong}
        />
      </div>
    </>
  );
};

export default Main;
