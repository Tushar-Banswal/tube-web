import { Link } from "react-router-dom"

function VideoItem({thumbnail, title, channelName, id}) {
  return (
    <div className="video-item">
    <Link to={`/video/${id}`}>
      <img className="thumbnail" src={`${thumbnail}`} alt="thumbnail"/>
      <h4>{title}</h4>
      <p className="channelname-sm">{channelName}</p>
    </Link>
    </div>
  )
}

export default VideoItem



