import { useEffect, useState } from "react";
import NewPlaylist from "../NewPlaylist/NewPlaylist";
import "./AllPlaylists.css";
const AllPlaylists = ({
  setVideosPlaylist,
  handleRemoveVideo,
  setPlaylistFromDB,
}) => {
  const [allPlaylists, setAllPlaylists] = useState([]);

  function getAllPlaylists() {
    fetch(`http://localhost:3001/playlist/AllPlaylists`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((_data) => {
        console.log(_data);
        setAllPlaylists(_data);
      });
  }
  useEffect(() => {
    getAllPlaylists();
  }, []);
  return (
    <div className="allPlaylist">
      <h4 id="namePlaylist">כל הפליליסטים</h4>
      <div className="all_songs_playlist">
        {allPlaylists.map((v) => (
          <NewPlaylist
            setPlaylistFromDB={setPlaylistFromDB}
            setVideosPlaylist={setVideosPlaylist}
            handleRemoveVideo={handleRemoveVideo}
            key={v._id}
            id={v._id}
            PlaylistName={v.PlaylistName}
            playlistImag={v.playlistImag}
            user={v.user}
          />
        ))}
      </div>
    </div>
  );
};

export default AllPlaylists;
