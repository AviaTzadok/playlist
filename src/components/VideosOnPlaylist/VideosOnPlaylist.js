import "./VideosOnPlaylist.css";

import { useEffect } from "react";
import VideoToMyPlaylist from "../VideoToMyPlaylist/VideoToMyPlaylist";
const VideosOnPlaylist = ({ videosPlaylist }) => {
  return (
    <div>
      <div className="song-playlist">
        <div style={{ padding: "20px 0" }}>
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
    </div>
  );
};

export default VideosOnPlaylist;
