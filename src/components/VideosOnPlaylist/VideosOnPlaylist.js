import { useEffect } from "react";
import VideoToMyPlaylist from "../VideoToMyPlaylist/VideoToMyPlaylist";
const VideosOnPlaylist = ({ videosPlaylist }) => {
  return (
    <div className="song-list">
      <div style={{ padding: "20px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          Videos List
        </h3>
        {videosPlaylist.map((v) => (
          <VideoToMyPlaylist
            key={v.id}
            id={v.id}
            title={v.title}
            image={v.image}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosOnPlaylist;
