import YouTube from "@u-wave/react-youtube";
import "./PlayingYouTubeVideo.css";
const PlayingYouTubeVideo = ({ playVideo }) => {
  console.log(playVideo);
  if (!playVideo) {
    // console.log("ddd");
    return <div></div>;
  }

  return (
    <div className="video-responsive">
      <iframe
        width="600"
        height="400"
        src={`https://www.youtube.com/embed/${playVideo}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
export default PlayingYouTubeVideo;
