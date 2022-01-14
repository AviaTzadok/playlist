import React from "react";
import { useContext, useEffect } from "react";
// import "./Video.css";
import VideoContext from "../../context/VideoContext";
import RemoveVideoContext from "../../context/RemoveVideoContext";

const VideoToMyPlaylist = ({ id, title, image }) => {
  const [{ removeVideo }, { playVideo }] = useContext(RemoveVideoContext);
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
      <button onClick={() => removeVideo(id)}>🗑️</button>
      <button onClick={() => playVideo(id)}>8</button>
    </div>
  );
};

export default VideoToMyPlaylist;
