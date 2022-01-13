import "./App.css";
import VideoContext from "./context/VideoContext";
import RemoveVideoContext from "./context/RemoveVideoContext";
import { useState } from "react";
import youtubeApi from "./components/api/YouTube";
import Search from "./components/Search/Search";
import VideoList from "./components/VideoList/VideoList";
import Playlist from "./components/Playlist/Playlist";
import VideosOnPlaylist from "./components/VideosOnPlaylist/VideosOnPlaylist";
import PlayingYouTubeVideo from "./components/PlayingYouTubeVideo/PlayingYouTubeVideo";

let tempItems = [
  // {
  //   image: "",
  //   title: "",
  //   id: "",
  // },
  {
    image: "https://i.ytimg.com/vi/5fetvrF3HHE/hqdefault_live.jpg",
    title: "If My Family Runs a Cardboard House! Funny Situations",
    id: "5fetvrF3HHE",
  },
  {
    image: "https://i.ytimg.com/vi/kmbKM-7N1K8/hqdefault.jpg",
    title:
      "Adley &amp; Niko BRAiN GAME!!  Finding Memories in JELLO a family 2021 recap and fun review THE MOViE 🍿",
    id: "kmbKM-7N1K8",
  },
  {
    image: "https://i.ytimg.com/vi/-x1eZJw15YM/hqdefault_live.jpg",
    title:
      "CHOCOLATE VS COMIDA DE VERDADE | Último a Parar de Comer Ganha! Gigante vs Minúsculo por RATATA COOL",
    id: "-x1eZJw15YM",
  },
  {
    image: "https://i.ytimg.com/vi/Ersw9J7MCEI/hqdefault_live.jpg",
    title:
      "INTO DUST: The Fight For Water (Based on a Real Story) | Real Stories [4k]",
    id: "Ersw9J7MCEI",
  },
  {
    image: "https://i.ytimg.com/vi/vh91ybgqtIQ/hqdefault_live.jpg",
    title: "Live 13/01 às 19h -  A importância de um Detox bem orientado",
    id: "vh91ybgqtIQ",
  },
];

let arrayVideo = [{ id: "", title: "", image: "" }];
tempItems.map((item) => {
  let obj = {
    id: item.id,
    title: item.title,
    image: item.image,
  };
  arrayVideo.push(obj);
});

function App() {
  // const videoListData = [{ videoMetaInfo: [], selectedVideoID: null }];

  const [videosSelectd, setVideoSelectd] = useState(arrayVideo);

  const [videosPlaylist, setVideosPlaylist] = useState([]);

  const [playVideo, setPlayVideo] = useState("");

  const handleAddVideo = (obj) => {
    setVideosPlaylist([...videosPlaylist, obj]);
  };

  const handleRemoveVideo = (id) => {
    setVideosPlaylist(videosPlaylist.filter((song) => song.id != id));
  };

  const handlePlayVideo = (id) => {
    console.log(id);
    setPlayVideo(id);
  };

  // const onSearch = async (videoToSearch) => {
  //   const response = await youtubeApi.get("/search", {
  //     params: {
  //       q: videoToSearch,
  //     },
  //   });
  //   console.log(response);

  // setVideoSelectd(response.data.items);
  // };

  return (
    <div className="App">
      <RemoveVideoContext.Provider value={{ removeVideo: handleRemoveVideo }}>
        <VideosOnPlaylist videosPlaylist={videosPlaylist} />
      </RemoveVideoContext.Provider>

      <PlayingYouTubeVideo playVideo={playVideo} />

      {/* <Search onSearch={onSearch} /> */}
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
