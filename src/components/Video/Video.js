import React from "react";
import { useContext, useEffect } from "react";
import "./Video.css";
import VideoContext from "../../context/VideoContext";

const Video = ({ id, title, image }) => {
  const { addNewVideo } = useContext(VideoContext);
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
    </div>
  );
};

export default Video;
