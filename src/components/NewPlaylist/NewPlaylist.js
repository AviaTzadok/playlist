import "./NewPlaylist.css";

const AddPlaylistToMongo = ({
  user,
  id,
  PlaylistName,
  playlistImag,
  setVideosPlaylist,
  setPlaylistFromDB,
}) => {
  //View the songs of the selected playlist
  function playPlaylist(id) {
    localStorage.selectedPlaylist = id;
    if (user) {
      localStorage.accessToAllVideos = false;
    } else {
      localStorage.accessToAllVideos = true;
    }
    fetch(`http://localhost:3001/playlist/Playlist/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((_data) => {
        setPlaylistFromDB(_data);
        setVideosPlaylist(_data);
      });
  }

  const mystyle = {
    backgroundImage: `url("${playlistImag}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "168px 170px",
  };

  return (
    <div className="totalPlaylist" title={PlaylistName} style={mystyle}>
      <div id="PlaylistName">{PlaylistName}</div>
      <button id="playlistVideo" onClick={() => playPlaylist(id)}></button>
    </div>
  );
};

export default AddPlaylistToMongo;
