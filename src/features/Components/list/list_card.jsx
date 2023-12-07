import React from 'react'
import { useNavigate } from 'react-router-dom'
import useMovieSearch from '../sercher/useMovieSearch'
import '../list/list_card_style.css'

const ListCard = ({ item }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/");
    navigate(`/${item.id}`)
  }

  return (
    <div
      className='box-card-list'
      style={{ backgroundImage: `url(${item.backdrop})`, }}
      onClick={handleClick}
    >
      <h1 style={{ fontSize: "1.3rem" }}>{item.title}</h1>
    </div>
  )
}


export default ListCard