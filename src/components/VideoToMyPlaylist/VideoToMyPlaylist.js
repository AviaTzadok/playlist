import React from "react";
import { useContext, useEffect } from "react";
import "./VideoToMyPlaylist.css";
import VideoContext from "../../context/VideoContext";
import RemoveVideoContext from "../../context/RemoveVideoContext";
import { BsYoutube, BsTrash } from "react-icons/bs";
import "./VideoToMyPlaylist.css";

const VideoToMyPlaylist = ({ id, title, image }) => {
  const [{ removeVideo }, { playVideo }] = useContext(RemoveVideoContext);
  let obj = {
    id: id,
    title: title,
    image: image,
  };

  return (
    <div className="totalImagePlaylist">
      {/* {id} */}
      <button id="playVideo" onClick={() => playVideo(id)}>
        <div className="imgSong">
          <img src={image} alt="Logo" className="songsImg" />
        </div>
        <div className="titleSong">{title}</div>
      </button>

      {localStorage.getItem("accessToAllVideos") == "true" && (
        <button id="removeVideo" onClick={() => removeVideo(id)}>
          <BsTrash />
        </button>
      )}
    </div>
  );
};

export default VideoToMyPlaylist;
