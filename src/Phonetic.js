import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic row">
      <ReactAudioPlayer
        src={props.phonetic.audio}
        controls
        className="Audioplayer col-12 col-md-3"
      />
      <span className="text col-12 col-md-6">{props.phonetic.text}</span>
    </div>
  );
}
