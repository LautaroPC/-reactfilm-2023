import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getMovieDetails } from '../services/movie_detail_services'
import Footer from '../../Components/footer/Footer'
import Header from '../../Components/header/Header'
import AppButton from '../../../core/components/app_button/app_button'
import MovieSkeleton from '../components/movie_skeleton'
import MovieError from '../components/movie_error'
import Sercher from '../../Components/sercher/Sercher'
import useMovieSearch from '../../Components/sercher/useMovieSearch'
import ListContainer from '../../Components/list/list_container'
import '../view/movie.css'
import '../../../core/components/app_button/app_button_style.css'
import '../../../css/components/navbar.css'

const MovieView = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const { data: movieDetails, error: movieDetailsError, isLoading: movieDetailsIsLoading } = useSWR('getMovieDetails', () => getMovieDetails(id));

  const {
    query,
    movies,
    moviesError,
    moviesIsLoading,
    search
  } = useMovieSearch();

  console.log(query);

  return (
    <div>
      <div className='box-nav'>
        <h1 style={{ fontWeight: "bold" }}><a href="index.html">ReactFilm</a></h1>
        <div>
          <Header >
            <Sercher onSearch={search}></Sercher>
          </Header>
        </div>
      </div>
      <>
        {query != '' ?
          <ListContainer movies={movies} moviesError={moviesError} moviesIsLoading={moviesIsLoading} /> :
          <>
            {movieDetailsError ?
              <MovieError /> :
              movieDetailsIsLoading ?
                <MovieSkeleton /> :
                <div className='box-card'>
                  <div className='card-text' >
                    <AppButton className="app_button_style"
                      onClick={() => { navigate("/") }}>Inicio</AppButton>
                    <h1>{movieDetails.title}</h1>
                    <h2>{movieDetails.tagline}</h2>
                    <h4>{movieDetails.description}</h4>
                    <h3>Generos: </h3>
                    <ul>
                      {movieDetails.genres.map((genere, index) => (
                        <li key={index}>{genere}</li>
                      ))}
                    </ul>
                    <h3>Duración: {movieDetails.time} minutos</h3>
                    <h3>Rating: {movieDetails.rating}</h3>
                  </div>
                  <img src={movieDetails.poster} />
                </div>
            }
          </>
        }
        <Footer />
      </>
    </div>
  )
}

export default MovieView