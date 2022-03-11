import { useEffect, useState } from "react";
import NewPlaylist from "../NewPlaylist/NewPlaylist";
import PopupAddPlaylist from "../popups/PopupAddPlaylist";
import "./PlaylistList.css";

const VideoList = ({
  setVideosPlaylist,
  handleRemoveVideo,
  setPlaylistFromDB,
}) => {
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
      <h4 id="namePlaylist">הפליליסטים שלי</h4>

      <div className="songs_playlist">
        {playlistFromDb.map((v) => (
          <NewPlaylist
            setPlaylistFromDB={setPlaylistFromDB}
            setVideosPlaylist={setVideosPlaylist}
            handleRemoveVideo={handleRemoveVideo}
            key={v._id}
            id={v._id}
            PlaylistName={v.PlaylistName}
            playlistImag={v.playlistImag}
          />
        ))}
        <PopupAddPlaylist getAllPlaylist={getAllPlaylist} />
      </div>
    </div>
  );
};

export default VideoList;
