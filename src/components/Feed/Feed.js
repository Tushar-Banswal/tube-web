import {FetchApiData} from '../../utils/FetchApiData';
import { useState, useEffect} from 'react';
import {SideBar, VideoList} from '../../components';
import Loader from '../Loader/Loader';

function Feed() {

  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('new');
  const [nextPage, setNextPage] = useState('');
  const [isLoadding, setIsLoadding] = useState(true);
  

  useEffect(()=>{
    FetchApiData(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setNextPage(data.nextPageToken);
      setVideos(data.items);
      setIsLoadding(false);
    })
    window.scrollTo(0,0);

  },[selectedCategory]);

  useEffect(()=>{

    const handleScroll = () => {
      if((window.innerHeight + document.documentElement.scrollTop + 1) >= document.documentElement.scrollHeight) {
        setIsLoadding(true);
        FetchApiData(`search?part=snippet&q=${selectedCategory}&pageToken=${nextPage}`)
        .then((data) => {
          setNextPage(data.nextPageToken);
          setVideos((prev)=>([...prev,...data.items]));
          setIsLoadding(false);
        })
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    return () =>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[nextPage, selectedCategory])

  return (
    <div className="feed">
      <h2><span style={{"color":"red"}}>{selectedCategory}</span> Videos</h2>
      <SideBar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <VideoList selectedCategory={selectedCategory} videos={videos}/>
      {isLoadding?<Loader />:<></>}
    </div>
  )
}

export default Feed
