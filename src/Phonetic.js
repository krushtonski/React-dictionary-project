import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <ReactAudioPlayer
        src={props.phonetic.audio}
        controls
        className="Audioplayer"
      />
      <br />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
