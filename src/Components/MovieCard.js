import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsPlayFill, BsPlus, BsHandThumbsUp } from "react-icons/bs";
import axios from 'axios';

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate()
  const goDetail = () => {
    navigate(`/movies/${item.id}`, {state: item})
  }
  console.log('item',item)
  return (
    <div className='card-wrapper'>
      <div
        className="card"
        onClick={goDetail}
        style={{
          backgroundImage:
            'url(' +
            `https://www.themoviedb.org/t/p/w400${item.poster_path}` +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '100%',
        }}
      >
        <h4>{item.title}</h4>
        <div className='card-title-background'></div>
      </div>
      <div className="overlay">
        <div>
          <button onClick={goDetail}><BsPlayFill /></button>
          <button><BsPlus /></button>
          <button><BsHandThumbsUp /></button>
        </div>
        <div className='overlay-info'>
          <span>평점: {item.vote_average}</span>
          <span>{item.adult ? '청불' : 'Under 18'}</span>
        </div>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger" className='badge'>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
