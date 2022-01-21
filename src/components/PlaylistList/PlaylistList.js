import { useEffect } from "react";
import Video from "../Video/Video";
import "./VideoLi.css";
const VideoList = ({ addPlaylistToPlaylistList }) => {
  return (
    <div>
      {/* <h3 id="titleList">Songs List</h3> */}
      <div className="songs_playlist">
        {addPlaylistToPlaylistList.map((v) => (
          <NewPlaylist key={v.id} id={v.id} title={v.title} image={v.image} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
