import "./App.css";
import VideoContext from "./context/VideoContext";
import RemoveVideoContext from "./context/RemoveVideoContext";
import { useState, useEffect } from "react";
import youtubeApi from "./components/api/YouTube";
import Search from "./components/Search/Search";
import VideoList from "./components/VideoList/VideoList";
import Playlist from "./components/Playlist/Playlist";
import VideosOnPlaylist from "./components/VideosOnPlaylist/VideosOnPlaylist";
import PlayingYouTubeVideo from "./components/PlayingYouTubeVideo/PlayingYouTubeVideo";
// import playlistSongs from "./components/obj/playlistSongs";
import fullSongsObj from "./components/obj/fullSongsObj";

function App() {
  // const videoListData = [{ videoMetaInfo: [], selectedVideoID: null }];

  const [videosSelectd, setVideoSelectd] = useState([]);

  const [PlaylistFromDB, setPlaylistFromDB] = useState([]);
  const [videosPlaylist, setVideosPlaylist] = useState([]);

  const [playVideo, setPlayVideo] = useState("");

  const [newSong, setNewSong] = useState("");

  function send_song_to_mongo(song) {
    fetch(`http://localhost:3001/songs`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(song),
    });
  }

  function getAllPlaylist() {
    fetch(`http://localhost:3001/songs`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPlaylistFromDB(data);
        setVideosPlaylist(data);
      });
  }

  useEffect(() => {
    getAllPlaylist();
  }, []);

  const handleAddVideo = (obj) => {
    let flag = true;
    videosPlaylist.map((v) => {
      if (v.id == obj.id) {
        flag = false;
      }
    });
    if (flag) {
      setVideosPlaylist([...videosPlaylist, obj]);
      send_song_to_mongo(obj);
    }
    return;
  };

  const handleRemoveVideo = (id) => {
    setVideosPlaylist(videosPlaylist.filter((song) => song.id != id));
    Delete_a_task_from_mongo(id);
  };

  function Delete_a_task_from_mongo(id) {
    fetch(`http://localhost:3001/songs`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify([id]),
    });
  }

  const handlePlayVideo = (id) => {
    console.log(id);
    setPlayVideo(id);
  };

  //*****************for search youtube***********************
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

  //*********for practice*********************
  const onSearch = (search) => {
    let arrayItems = fullSongsObj.data.items;
    let arrayVideo = [];
    // { id: "", title: "", image: "" }
    arrayItems.map((item) => {
      let obj = {
        id: item.id.videoId,
        title: item.snippet.title,
        image: item.snippet.thumbnails.medium.url,
      };
      arrayVideo.push(obj);
    });

    console.log(arrayVideo);
    setVideoSelectd(arrayVideo);
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

  return (
    <div className="App">
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
}

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
