import axios from "axios";

const VITE_APP_TMDB_API_KEY = "ecca6551bd14118cf70d43e4f498fe59"
const VITE_APP_TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2NhNjU1MWJkMTQxMThjZjcwZDQzZTRmNDk4ZmU1OSIsInN1YiI6IjY1NjhmMzEzZDA1YTAzMDEyYzZmZmUwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JsZuIgtadIPU1c-NWAKypkLfsulz7bDtDnSOcolkGOE"

export const tmdb_api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${VITE_APP_TMDB_TOKEN}`
    },
    params: {
        api_key: VITE_APP_TMDB_API_KEY,
        language: 'es-ES',
    },
})

export const tmdb_paths = {
  movies: {
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
  },
  movie: {
    id: "/movie/"
  },
  tv: {
    popular: "/tv/popular",
    top_rated: "/tv/top_rated",
    airing_today: "/tv/airing_today",
  },
  images: {
     poster: {
      sizes: {
        w92: "/w92",
        w154: "/w154",
        w185: "/w185",
        w342: "/w342",
        w500: "/w500",
        w780: "/w780",
        original: "/original",
      },
      url: "https://image.tmdb.org/t/p",
    },
    backdrop: {
      sizes: {
        w300: "/w300",
        w780: "/w780",
        w1280: "/w1280",
        original: "/original",
      },
      url: "https://image.tmdb.org/t/p",
    },
  }, 
};
