import React from "react";
import { BsYoutube, BsTrash } from "react-icons/bs";

const AddPlaylistToMongo = ({
  id,
  PlaylistName,
  playlistImag,
  setVideosPlaylist,
  handleRemoveVideo,
}) => {
  function playPlaylist(id) {
    console.log(id);
    localStorage.selectedPlaylist = id;
    fetch(`http://localhost:3001/playlist/Playlist/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((_data) => {
        console.log(_data);
        console.log("3333333333333333333333333333333");
        setVideosPlaylist(_data);
      });
  }
  return (
    <div className="Playlist">
      <button id="playVideo" onClick={() => playPlaylist(id)}>
        {PlaylistName} {playlistImag}
      </button>
      {/* {localStorage.getItem("accessToAllVideos") == "true" && (
        <button id="removeVideo" onClick={() => handleRemoveVideo(id)}>
          <BsTrash />
        </button>
      )} */}
    </div>
  );
};

export default AddPlaylistToMongo;
