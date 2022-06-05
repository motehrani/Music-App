import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, index }) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.index === index);
    setCurrentSong(selectedSong[0]);
  };
  return (
    <div className="library-song" onClick={songSelectHandler}>
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name} </h3>
        <h4>{song.artist} </h4>
      </div>
    </div>
  );
};

export default LibrarySong;
