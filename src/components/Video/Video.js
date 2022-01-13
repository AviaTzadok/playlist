import React from "react";
import "./Video.css";
import { useContext, useEffect } from "react";
import VideoContext from "../../context/VideoContext";
// import PlayingYouTubeVideoContext from "../../context/PlayingYouTubeVideoContext";

const Video = ({ id, title, image }) => {
  const [{ addNewVideo }, { playVideo }] = useContext(VideoContext);

  let obj = {
    id: id,
    title: title,
    image: image,
  };

  return (
    <div className="totalImage">
      <img src={image} alt="Logo" />
      {id}
      {title}
      <button onClick={() => addNewVideo(obj)}>+</button>
      <button onClick={() => playVideo(id)}>8</button>
    </div>
  );
};

export default Video;
