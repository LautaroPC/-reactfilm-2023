import axios from 'axios';


const TMDB_API = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params:{
    api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
    language: "es-ES",
  },
});

const TMDB_PATH = {
  trending:"/trending/all/week",
  originals:"/discover/tv",
  topRated: "/movie/top_rated",
}