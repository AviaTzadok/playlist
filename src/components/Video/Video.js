import "./Video.css";
import VideoContext from "../../context/VideoContext";
import { BsPlusSquareFill } from "react-icons/bs";
import { useContext } from "react";

const Video = ({ id, title, image }) => {
  const [{ addNewVideo }, { playVideo }] = useContext(VideoContext);
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
      {localStorage.getItem("accessToken") !== "-1" && (
        <button id="addVideo" onClick={() => addNewVideo(obj)}>
          <BsPlusSquareFill />
        </button>
      )}
    </div>
  );
};

export default Video;
