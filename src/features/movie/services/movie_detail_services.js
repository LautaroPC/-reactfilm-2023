import { tmdb_api, tmdb_paths } from "../../../core/datasource/tmdb/tmdb_api";
import { movieDetailsAdapter } from "./adapter/movie_detail_adapter";


export const getMovieDetails = async (id) => {
        
    const {data} = await tmdb_api.get(`${tmdb_paths.movie.id}${id}`);
    return movieDetailsAdapter(data);
    
}