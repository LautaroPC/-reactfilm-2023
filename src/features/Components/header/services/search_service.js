import { tmdb_api, tmdb_paths } from "../../../../core/datasource/tmdb/tmdb_api";
import { tmdbMoviesTvAdapter } from "../../../home/services/adapter/tmdb_adapter";

export const getMovieSearch = async (parametros) => {

  const params = {
    query: parametros,
  }

  const { data } = await tmdb_api.get(tmdb_paths.movies.search, { params });

  return tmdbMoviesTvAdapter(data);
}

