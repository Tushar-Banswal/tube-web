
import VideoItem from '../VideoItem/VideoItem';

function VideoList({videos}) {

  console.log(videos);

  return (
    <div className='videoList'>
        <div className="list">
      {videos?.map((video, i) => 
        <VideoItem
         key={i}
         id={video.id.videoId} 
         thumbnail={video.snippet.thumbnails.medium.url}
         title={video.snippet.title}
         channelName={video.snippet?.channelTitle}/>
      )}
      </div>
    </div>
  )
}

export default VideoList
