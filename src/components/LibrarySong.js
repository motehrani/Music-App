import React from "react";

const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //check if the song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play(); //what these 4 lines mean?
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
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
