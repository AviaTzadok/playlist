import { useEffect } from "react";
import Video from "../Video/Video";
import "./VideoList.css";
const VideoList = ({ videosSelectd }) => {
  return (
    <div>
      <h3 id="titleList">Songs List</h3>
      <div className="song-list">
        {videosSelectd.map((v) => (
          <Video key={v.id} id={v.id} title={v.title} image={v.image} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
