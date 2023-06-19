import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { FetchApiData } from "../../utils/FetchApiData";
import VideoDetails from "../VideoDetails/VideoDetails";
import SuggestedVideos from "../SuggestedVideos/SuggestedVideos";

function Video() {

  const {id} = useParams();
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState({});


  useEffect(()=>{
    FetchApiData(`search?part=id,snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>{
      setSuggestedVideos(data.items);
    })
    FetchApiData(`videos?part=contentDetails,snippet&id=${id}`)
    .then((data)=>{
      console.log(data);
      setVideoDetail(data.items[0]);
    })
  },[id]);

  
  return (
    <div className="video">

      <VideoDetails 
      id={videoDetail?.id}
      videoTitle={videoDetail?.snippet?.title}
      channelName={videoDetail?.snippet?.channelTitle} />

      <SuggestedVideos 
      videoList={suggestedVideos}/>
    </div>
  )
}

export default Video

