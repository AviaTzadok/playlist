import "./VideoList.css";
import Video from "../Video/Video";

//Songs that are in my playlist
const VideoList = ({ videosSelectd }) => {
  return (
    <div>
      <div className="song-list">
        {videosSelectd.map((v) => (
          <Video key={v.id} id={v.id} title={v.title} image={v.image} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
