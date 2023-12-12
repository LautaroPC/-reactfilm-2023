import React from 'react'
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import useSWR from 'swr';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/movies_services';
import { getAiringTodayTv, getPopularTv, getTopRatedTv } from '../services/tv_services';
import SwiperContainer from '../../../core/components/app_swiper/swiper_container';
import SwiperError from '../../../core/components/app_swiper/swiper_error';
import SwiperSkeleton from '../../../core/components/app_swiper/swiper_skeleton';
import BannerContainer from '../../../core/components/app_banner/banner_container';
import BannerError from '../../../core/components/app_banner/banner_error';
import BannerSkeleton from '../../../core/components/app_banner/banner_skeleton';
import Sercher from '../../Components/sercher/Sercher';
import ListContainer from '../../Components/list/list_container';
import useMovieSearch from '../../Components/sercher/useMovieSearch';
import '../../../css/components/navbar.css'


const HomeView = () => {

  // Movies
  const { data: popularMovies, error: popularMoviesError, isLoading: popularMoviesIsLoading } = useSWR(`getPopularMovies`, getPopularMovies);
  const { data: topRatedMovies, error: topRatedMoviesError, isLoading: topRatedMoviesIsLoading } = useSWR(`getTopRatedMovies`, getTopRatedMovies);
  const { data: comingMovies, error: comingMoviesError, isLoading: comingMoviesIsLoading } = useSWR(`getUpcomingMovies`, getUpcomingMovies);

  // TV
  const { data: popularTv, error: popularTvError, isLoading: popularTvIsLoading } = useSWR(`getPopularTv`, getPopularTv);
  const { data: topRatedTv, error: topRatedTvError, isLoading: topRatedTvIsLoading } = useSWR(`getTopRatedTv`, getTopRatedTv);
  const { data: airingTodayTv, error: airingTodayTvError, isLoading: airingTodayTvIsLoading } = useSWR(`getAiringTodayTv`, getAiringTodayTv);

  const {
    query,
    movies,
    moviesError,
    moviesIsLoading,
    search
  } = useMovieSearch();

  return (
    <div className='box-home' style={{ backgroundColor: "rgb(0, 19, 20)" }}>
      <div className='box-nav'>
        <h1 style={{ fontWeight: "bold" }}><a href="index.html">ReactFilm</a></h1>
        <div>
          <Header>
            <Sercher onSearch={search}></Sercher>
          </Header>
        </div>
      </div>
      {query != '' ?
        <ListContainer movies={movies} moviesError={moviesError} moviesIsLoading={moviesIsLoading} /> :
        <>
          {popularMoviesError ? <BannerError /> : popularMoviesIsLoading ? <BannerSkeleton /> : <BannerContainer data={popularMovies}></BannerContainer>}
          <div style={{ padding: "2.4rem" }}>
            {popularMoviesError ? <SwiperError /> : popularMoviesIsLoading ? <SwiperSkeleton /> : <SwiperContainer title={"Popular Movies"} data={popularMovies} />}
            <br></br>
            {topRatedMoviesError ? <SwiperError /> : topRatedMoviesIsLoading ? <SwiperSkeleton /> : <SwiperContainer title={"Top Rated Movies"} data={topRatedMovies} />}
            <br></br>
            {comingMoviesError ? <SwiperError /> : comingMoviesIsLoading ? <SwiperSkeleton /> : <SwiperContainer title={"Coming Movies Movies"} data={comingMovies} />}

            <br></br>
            {popularTvError ? <SwiperError /> : popularTvIsLoading ? <SwiperSkeleton /> : <SwiperContainer title={"Popular TV"} data={popularTv}></SwiperContainer>}
            <br></br>
            {topRatedTvError ? <SwiperError /> : topRatedTvIsLoading ? <SwiperSkeleton /> : <SwiperContainer title={"Top Rated TV"} data={topRatedTv} />}
            <br></br>
            {airingTodayTvError ? <SwiperError /> : airingTodayTvIsLoading ? <SwiperSkeleton /> : <SwiperContainer title={"Airing Today TV"} data={airingTodayTv} />}
          </div>
        </>
      }
      <Footer />
    </div>
  );
}

export default HomeView;