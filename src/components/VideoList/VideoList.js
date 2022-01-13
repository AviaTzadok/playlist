import { useEffect } from "react";
import Video from "../Video/Video";
const VideoList = ({ videosSelectd }) => {
  return (
    <div className="song-list">
      {videosSelectd.map((v) => (
        <Video key={v.id} id={v.id} title={v.title} image={v.image} />
      ))}
    </div>
  );
};

export default VideoList;
