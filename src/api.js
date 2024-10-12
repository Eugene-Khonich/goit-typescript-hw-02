import axios from 'axios';

const KEY = '7Q4UNfrCxnO62SvoBjwHll-c2YNphxDFlTScmMjsVbU';
axios.defaults.baseURL = 'https://api.unsplash.com/';

const fetchIImg = async searchValue => {
  const axiosOptions = {
    headers: {
      'Accept-Version': 'v1',
      Authorization: `Client-ID ${KEY}`,
    },
    params: {
      query: searchValue,
      per_page: 20,
    },
  };
  const response = await axios.get('search/photos', axiosOptions);
  return response.data;
};

export default fetchIImg;
