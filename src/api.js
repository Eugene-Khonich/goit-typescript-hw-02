import axios from 'axios';

const KEY = '7Q4UNfrCxnO62SvoBjwHll-c2YNphxDFlTScmMjsVbU';
axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';

const axiosOptions = {
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${KEY}`,
  },
  params: {
    per_page: 20,
  },
};

const fetchImg = async (value, page) => {
  axiosOptions.params.query = value;
  axiosOptions.params.page = page;
  const response = await axios.get('', axiosOptions);
  return response.data;
};

export default fetchImg;
