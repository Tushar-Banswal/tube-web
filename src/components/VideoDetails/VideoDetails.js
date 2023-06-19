
const VideoDetails = ({id, videoTitle, channelName}) => {
  return (
    <div className="video-detail">
      <iframe src={`https://www.youtube.com/embed/${id}`}
      className="video-frame"
      frameborder="1"
      allow="autoplay; encyptrd-media"
      allowFullScreen
      title="video"
      />
      <h3 className="video-title">{videoTitle}</h3>
      <p className="channelname-sm channelname">{channelName}</p>
    </div>
  )
}

export default VideoDetails
