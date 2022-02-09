import React from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import "./Video.css";
import { useContext, useEffect } from "react";
import VideoContext from "../../context/VideoContext";
// import PlayingYouTubeVideoContext from "../../context/PlayingYouTubeVideoContext";

const Video = ({ id, title, image }) => {
  const [{ playVideo }] = useContext(VideoContext);
  let obj = {
    id: id,
    title: title,
    image: image,
  };
  return (
    <div className="totalImageSelector">
      <button id="playVideo" onClick={() => playVideo(id)}>
        <div className="imgSong">
          <img src={image} alt="Logo" className="songsImg" />
        </div>
        <div className="titleSongList">{title}</div>
      </button>
    </div>
  );
};

export default Video;