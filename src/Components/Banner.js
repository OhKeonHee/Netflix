import React from 'react';
import { BsPlayFill, BsInfoCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Banner = ({ movie }) => {
  console.log('movie?', movie);
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/movies/${movie.id}`, {state: movie})
  }
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          'URL(' +
          `https://www.themoviedb.org/t/p/original${movie.backdrop_path}` +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right center'
      }}
    >
      <div className="banner-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div className='info-btns'>
          <button id='banner-play' onClick={goToDetail}><BsPlayFill style={{transform: 'translateY(-1px)', marginRight: '5px', fontSize: '25px'}} />재생</button>
          <button id='banner-info'><BsInfoCircle style={{transform: 'translateY(-1px)', marginRight: '15px', fontSize: '20px', fontWeight:'bold'}} />상세정보</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
