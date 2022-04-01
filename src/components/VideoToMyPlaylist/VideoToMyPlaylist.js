import "./VideoToMyPlaylist.css";
import "./VideoToMyPlaylist.css";
import RemoveVideoContext from "../../context/RemoveVideoContext";
import { useContext } from "react";
import { BsTrash } from "react-icons/bs";

//Songs I got in search results and candidates to enter my playlist
const VideoToMyPlaylist = ({ id, _id, title, image }) => {
  const [{ removeVideo }, { playVideo }] = useContext(RemoveVideoContext);

  return (
    <div className="totalImagePlaylist">
      <button id="playVideo" onClick={() => playVideo(id)}>
        <div className="imgSong">
          <img src={image} alt="Logo" className="songsImg" />
        </div>
        <div className="titleSong">{title}</div>
      </button>

      {localStorage.getItem("accessToAllVideos") == "true" && (
        <button id="removeVideo" onClick={() => removeVideo(_id)}>
          <BsTrash />
        </button>
      )}
    </div>
  );
};

export default VideoToMyPlaylist;
