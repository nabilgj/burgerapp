import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburgerapp-3e0f2.firebaseio.com/'
});

export default instance;