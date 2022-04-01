import "./VideosOnPlaylist.css";
import VideoToMyPlaylist from "../VideoToMyPlaylist/VideoToMyPlaylist";

const VideosOnPlaylist = ({ videosPlaylist }) => {
  return (
    <div>
      <div className="song-playlist">
        <div style={{ padding: "20px 0" }}>
          {videosPlaylist.length > 1 &&
            videosPlaylist.map((v) => (
              <VideoToMyPlaylist
                key={v.id}
                id={v.id}
                _id={v._id}
                title={v.title}
                image={v.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideosOnPlaylist;
