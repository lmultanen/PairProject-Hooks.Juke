import React from "react";
import { Sidebar, AllAlbums, Player, SingleAlbum } from "./components";
import Axios from "axios";

const albumDummy = {
  id: 1,
  name: "No Dummy",
  artworkUrl: "default-album.jpg",
  artistId: 1,
  artist: {
    id: 1,
    name: "The Crash Test Dummies",
  },
};

const Main = () => {
  const [albums, setAlbums] = React.useState([]);
  const [selectedAlbum, setSelectedAlbum] = React.useState({});

  function selectAlbum() {
    setSelectedAlbum(albumDummy);
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
        <Sidebar />
        {!Object.keys(selectedAlbum).length ? (
          <AllAlbums albums={albums} selectAlbum={selectAlbum} />
        ) : (
          <SingleAlbum />
        )}
        <Player />
      </div>
    </>
  );
};

export default Main;
