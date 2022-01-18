import YouTube from "@u-wave/react-youtube";
import "./PlayingYouTubeVideo.css";

const PlayingYouTubeVideo = ({ playVideo }) => {
  console.log(playVideo);
  if (!playVideo) {
    // console.log("ddd");
    return <div></div>;
  }

  function onPlayerStateChange() {
    console.log("lllllllllllllll");
  }

  return (
    <div className="video-responsive">
      <iframe
        width="600"
        height="400"
        src={`https://www.youtube.com/embed/${playVideo}?autoplay=1`}
        frameBorder="0"
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        // onended="onPlayerStateChange()"
      />
    </div>
  );
};
export default PlayingYouTubeVideo;
