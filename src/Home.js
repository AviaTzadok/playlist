import "./App.css";
import VideoContext from "./context/VideoContext";
import PlaylistList from "./components/PlaylistList/PlaylistList";
import AllPlaylists from "./components/AllPlaylists/AllPlaylists";
import RemoveVideoContext from "./context/RemoveVideoContext";
import Search from "./components/Search/Search";
import VideoList from "./components/VideoList/VideoList";
import VideosOnPlaylist from "./components/VideosOnPlaylist/VideosOnPlaylist";
import PlayingYouTubeVideo from "./components/PlayingYouTubeVideo/PlayingYouTubeVideo";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [videosSelectd, setVideoSelectd] = useState([]);
  const [PlaylistFromDB, setPlaylistFromDB] = useState([]);
  const [videosPlaylist, setVideosPlaylist] = useState([]);
  const [playVideo, setPlayVideo] = useState("");
  const [newSong, setNewSong] = useState("");

  //Displays the playlist we used recently
  function getMyPlaylist() {
    localStorage.accessToAllVideos = true;
    if (localStorage.getItem("selectedPlaylist")) {
      try {
        fetch(
          `http://localhost:3001/playlist/playlist/${localStorage.getItem(
            "selectedPlaylist"
          )}`,
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((_data) => {
            setPlaylistFromDB(_data);
            setVideosPlaylist(_data);
          });
      } catch (err) {}
    }
  }

  //Search songs
  const onSearch = async (videoToSearch) => {
    fetch(`http://localhost:3001/search/${videoToSearch}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((_data) => {
        let arrayItems = _data.items;
        arrayItems = arrayItems.filter((v) => v.id.kind == "youtube#video");
        let arrayVideo = [];

        arrayItems.map((item) => {
          let obj = {
            id: item.id.videoId,
            title: item.snippet.title,
            image: item.snippet.thumbnails.high.url,
          };
          arrayVideo.push(obj);
        });
        setVideoSelectd(arrayVideo);
        setVideosPlaylist(PlaylistFromDB);
      });
  };

  //Add a song to a particular playlist
  const handleAddVideo = (obj) => {
    if (localStorage.getItem("accessToken") == "-1") {
      return;
    }
    let flag = true;
    videosPlaylist.map((v) => {
      if (v.id == obj.id) {
        flag = false;
      }
    });
    if (flag) {
      send_song_to_mongo(obj);
    }
    return;
  };

  function send_song_to_mongo(song) {
    let obj = {
      name: song,
      playlistID: localStorage.selectedPlaylist,
    };
    fetch(`http://localhost:3001/songs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setPlaylistFromDB([data, ...videosPlaylist]);
          setVideosPlaylist([data, ...videosPlaylist]);
        }
      });
  }

  //Delete song from playlist
  function handleRemoveVideo(id) {
    let obj = {
      id: id,
      playlistID: localStorage.selectedPlaylist,
    };
    fetch(`http://localhost:3001/songs/`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        setPlaylistFromDB(data);
        setVideosPlaylist(data);
      });
  }

  //Play a song
  const handlePlayVideo = (id) => {
    setPlayVideo(id);
  };

  //Search for a song in my playlist while searching to add a song.
  const filterPlaylist = (search) => {
    if (search.length > 0) {
      setVideosPlaylist(
        PlaylistFromDB.filter((v) =>
          v.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      );
    } else {
      setVideosPlaylist(PlaylistFromDB);
    }
  };

  useEffect(() => {
    getMyPlaylist();
  }, []);

  return (
    <div className="App">
      <Link to={`/`} id="LinkUp">
        <button className="logOut">
          <LogoutIcon />
        </button>
      </Link>

      <div className="get_my_playlist" onClick={() => getMyPlaylist()}></div>

      <AllPlaylists
        setPlaylistFromDB={setPlaylistFromDB}
        setVideosPlaylist={setVideosPlaylist}
        handleRemoveVideo={handleRemoveVideo}
      />

      <RemoveVideoContext.Provider
        value={[
          { removeVideo: handleRemoveVideo },
          { playVideo: handlePlayVideo },
        ]}
      >
        <VideosOnPlaylist videosPlaylist={videosPlaylist} />
      </RemoveVideoContext.Provider>

      <PlaylistList
        setPlaylistFromDB={setPlaylistFromDB}
        setVideosPlaylist={setVideosPlaylist}
        handleRemoveVideo={handleRemoveVideo}
      />
      <PlayingYouTubeVideo playVideo={playVideo} />

      <Search
        onSearch={onSearch}
        newSong={newSong}
        setNewSong={setNewSong}
        filterPlaylist={filterPlaylist}
      />
      <VideoContext.Provider
        value={[
          { addNewVideo: handleAddVideo },
          { playVideo: handlePlayVideo },
        ]}
      >
        <VideoList videosSelectd={videosSelectd} />
      </VideoContext.Provider>
    </div>
  );
};

export default App;
