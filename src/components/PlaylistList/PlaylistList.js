import { useEffect, useState } from "react";
import NewPlaylist from "../NewPlaylist/NewPlaylist";
import PopupAddPlaylist from "../popups/PopupAddPlaylist";
import "./PlaylistList.css";

const VideoList = ({ setVideosPlaylist, handleRemoveVideo }) => {
  const [playlistFromDb, setPlaylistFromDb] = useState([]);

  useEffect(() => {
    getAllPlaylist();
  }, []);

  function getAllPlaylist() {
    fetch(`http://localhost:3001/playlist/allPlaylistImg`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((_data) => {
        console.log(_data);
        setPlaylistFromDb(_data);
      });
  }

  return (
    <div className="playlists">
      <div className="songs_playlist">
        {playlistFromDb.map((v) => (
          <NewPlaylist
            setVideosPlaylist={setVideosPlaylist}
            handleRemoveVideo={handleRemoveVideo}
            key={v._id}
            id={v._id}
            PlaylistName={v.PlaylistName}
            playlistImag={v.playlistImag}
          />
        ))}
      </div>
      <PopupAddPlaylist />
    </div>
  );
};

export default VideoList;
