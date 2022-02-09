import "./App.css";
import VideoContext from "./context/VideoContext";
import PlaylistListContext from "./context/PlaylistListContext";
import RemoveVideoContext from "./context/RemoveVideoContext";
import { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import VideoList from "./components/VideoList/VideoList";
import SignIn from "./components/SignIn/SignIn";
import VideosOnPlaylist from "./components/VideosOnPlaylist/VideosOnPlaylist";
import PlayingYouTubeVideo from "./components/PlayingYouTubeVideo/PlayingYouTubeVideo";
// import playlistSongs from "./components/obj/playlistSongs";
import fullSongsObj from "./components/obj/fullSongsObj";
import SignUp from "./components/SignUp/SignUp";
import { useParams, useNavigate, Link } from "react-router-dom";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import LogoutIcon from "@mui/icons-material/Logout";
import PlaylistList from "./context/PlaylistListContext";
const App = () => {
  // const videoListData = [{ videoMetaInfo: [], selectedVideoID: null }];

  const [videosSelectd, setVideoSelectd] = useState([]);

  const [PlaylistFromDB, setPlaylistFromDB] = useState([]);
  const [videosPlaylist, setVideosPlaylist] = useState([]);

  const [playVideo, setPlayVideo] = useState("");

  const [newSong, setNewSong] = useState("");

  function getMyPlaylist() {
    localStorage.accessToAllVideos = true;
    try {
      fetch(`http://localhost:3001/songs/${"myPlaylist"}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPlaylistFromDB(data);
          setVideosPlaylist(data);
        });
    } catch (e) {
      console.log(e);
      console.log("no songs on database");
    }
  }

  function get_all_videos() {
    localStorage.accessToAllVideos = false;
    fetch(`http://localhost:3001/songs`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPlaylistFromDB(data);
        setVideosPlaylist(data);
      });
  }

  const onSearch = async (videoToSearch) => {
    fetch(`http://localhost:3001/search/${videoToSearch}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((_data) => {
        console.log(_data);
        let arrayItems = _data.items;
        arrayItems = arrayItems.filter((v) => v.id.kind == "youtube#video");
        let arrayVideo = [];

        arrayItems.map((item) => {
          let obj = {
            id: item.id.videoId,
            title: item.snippet.title,
            image: item.snippet.thumbnails.medium.url,
          };
          arrayVideo.push(obj);
        });

        setVideoSelectd(arrayVideo);
      });
  };

  function send_song_to_mongo(song) {
    fetch(`http://localhost:3001/songs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(song),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          setPlaylistFromDB([...videosPlaylist, data]);
          setVideosPlaylist([...videosPlaylist, data]);
        }
      });
  }

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

  function handleRemoveVideo(id) {
    console.log(localStorage.getItem("accessToken"));
    fetch(`http://localhost:3001/songs/`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify([id]),
    })
      .then((res) => res.json())
      .then((data) => {
        setPlaylistFromDB(data);
        setVideosPlaylist(data);
      });
  }

  const handlePlayVideo = (id) => {
    console.log(id);
    setPlayVideo(id);
  };

  const filterPlaylist = (search, a) => {
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

  //*********for practice*********************
  // const onSearch = (search) => {
  //   let arrayItems = fullSongsObj.data.items;
  //   let arrayVideo = [];
  //   // { id: "", title: "", image: "" }
  //   arrayItems.map((item) => {
  //     let obj = {
  //       id: item.id.videoId,
  //       title: item.snippet.title,
  //       image: item.snippet.thumbnails.medium.url,
  //     };
  //     arrayVideo.push(obj);
  //   });

  //   console.log(arrayVideo);
  //   setVideoSelectd(arrayVideo);
  // };

  function handleRemovePlaylist() {}
  return (
    <div className="App">
      <Link to={`/`} id="LinkUp">
        <button className="logOut">
          <LogoutIcon />
        </button>
      </Link>
      <div className="get_all_videos" onClick={() => get_all_videos()}>
        <SubscriptionsIcon />
      </div>
      <div className="get_my_playlist" onClick={() => getMyPlaylist()}>
        <QueueMusicIcon />
      </div>

      <RemoveVideoContext.Provider
        value={[
          { removeVideo: handleRemoveVideo },
          { playVideo: handlePlayVideo },
        ]}
      >
        <VideosOnPlaylist videosPlaylist={videosPlaylist} />
      </RemoveVideoContext.Provider>

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

//for search youtube
// const onSearch = async (videoToSearch) => {
//   const response = await youtubeApi.get("/search", {
//     params: {
//       q: videoToSearch,
//     },
//   });
//   let arrayItems = response.data.items;
//   let arrayVideo = [{ id: "", title: "", image: "" }];

//   arrayItems.map((item) => {
//     let obj = {
//       id: item.id.videoId,
//       title: item.snippet.title,
//       image: item.snippet.thumbnails.medium.url,
//     };
//     arrayVideo.push(obj);
//   });

//   console.log(arrayVideo);
//   setVideoSelectd(arrayVideo);
// };

// const onSearch = (search) => {
//   // let arrayItems = response.data.items;
//   let arrayItems = tempItems.data.items;
//   let arrayVideo = [{ id: "", title: "", image: "" }];

//   arrayItems.map((item) => {
//     let obj = {
//       id: item.id.videoId,
//       title: item.snippet.title,
//       image: item.snippet.thumbnails.medium.url,
//     };
//     arrayVideo.push(obj);
//   });

//   console.log(arrayVideo);
//   setVideoSelectd(arrayVideo);
// };
