import "./PlayingYouTubeVideo.css";

//Play the song
const PlayingYouTubeVideo = ({ playVideo }) => {
  if (!playVideo) {
    return <div></div>;
  }

  return (
    <div className="video-responsive">
      <iframe
        width="400"
        height="300"
        src={`https://www.youtube.com/embed/${playVideo}?autoplay=1`}
        frameBorder="0"
        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
export default PlayingYouTubeVideo;
