import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';

const options = {
    params: {
      maxResults: '20'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const FetchApiData = async(urlStr) => {
    try {
        const {data} = await axios.get(`${BASE_URL}${urlStr}`, options);
        return data;
    } catch(error) {
        console.log(error);
    }
}