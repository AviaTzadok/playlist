import { useEffect } from "react";
import Video from "../Video/Video";
const VideoList = ({ videosSelectd }) => {
  return (
    <div className="song-list">
      <div style={{ padding: "20px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          Videos List
        </h3>
        {videosSelectd.map((v) => (
          <Video key={v.id} id={v.id} title={v.title} image={v.image} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
