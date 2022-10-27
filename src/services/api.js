import axios from 'axios';
// BASE DA URL: https://api.themoviedb.org/3
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=d60e89d440226a2b3406b6769ab95b1e&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;