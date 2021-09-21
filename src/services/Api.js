import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhosto:8080/ifome/'
})

export default api;