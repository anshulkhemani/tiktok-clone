import axios from 'axios';

const instance = axios.create ({
    baseURL:"https://tiktok-backen.herokuapp.com",
});
export default instance;