import { useEffect, useState } from "react";
import VideoList from "../VideoList/VideoList";
import { FetchApiData } from "../../utils/FetchApiData";
import {useParams} from 'react-router-dom';
import Loader from "../Loader/Loader";

function SearchFeed() {

  const [searchedVideos, setSearchedVideos] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [isLoadding, setIsLoadding] = useState(true);

  const {query} = useParams();

  useEffect(()=>{
    FetchApiData(`search?part=snippet&q=${query}`)
    .then((data) => {
      setNextPage(data.nextPageToken);
      setSearchedVideos(data.items);
      setIsLoadding(false);
    })
  },[query]);

  useEffect(()=>{
    const handleScroll = ()=>{
    if((window.innerHeight + document.documentElement.scrollTop + 1) >= document.documentElement.scrollHeight) {
      setIsLoadding(true);
      FetchApiData(`search?part=snippet&q=${query}&pageToken=${nextPage}`)
      .then((data) => {
        setNextPage(data.nextPageToken);
        setSearchedVideos((prev)=>([...prev,...data.items]));
        setIsLoadding(false);
      })
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  return () =>{
    window.removeEventListener('scroll', handleScroll);
  }
  },[query, nextPage])

  return (
    <div className="search-feed">
      <VideoList videos={searchedVideos}/>
      {isLoadding?<Loader />:<></>}
    </div>
  )
}

export default SearchFeed
