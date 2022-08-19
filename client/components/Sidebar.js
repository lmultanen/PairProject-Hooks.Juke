import React from "react";

function Sidebar({setSelectedAlbum}) {
  return (
    <div id="sidebar">
      <img src="juke.svg" id="logo" />
      <section>
        <h4>
          <a onClick={() => setSelectedAlbum({})}>ALBUMS</a>
        </h4>
      </section>
    </div>
  );
}

export default Sidebar;
