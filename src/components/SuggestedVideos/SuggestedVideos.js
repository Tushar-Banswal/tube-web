import VideoItem from "../VideoItem/VideoItem"
const SuggestedVideos = ({videoList}) => {
  return (
    <div className="suggested-videos">
      {videoList?.map((video,i)=> (
        <VideoItem
        key={i}
        id={video.id.videoId} 
        thumbnail={video.snippet.thumbnails.medium.url}
        title={video.snippet.title}
        channelName={video.snippet.channelTitle}/>
      ))}
    </div>
  )
}

export default SuggestedVideos
