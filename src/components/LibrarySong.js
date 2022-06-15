import React from "react";
import { PlayAudio } from "../util";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  id, //where is this id come from???????????
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
      //khob in dar vaqea har bari ke ye songi ro select mikonim miad
      //hame ye bar az aval hame song haro be qoli upload mikone ke in too
      //teadade balaye song ha baes mishe ke alaki data load she too
      //khob in che vazeshe ya in ke asan injooria nist
    });
    setSongs(newSongs);
    //check if the song is playing
    PlayAudio(isPlaying, audioRef);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`} //what the hell is this one now
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name} </h3>
        <h4>{song.artist} </h4>
      </div>
    </div>
  );
};

export default LibrarySong;
