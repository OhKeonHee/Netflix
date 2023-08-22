import React, { PropsWithChildren } from 'react';
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import YouTube from 'react-youtube';
import { Badge } from 'react-bootstrap';
import { BsPlayFill, BsPlus, BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import {ClipLoader} from 'react-spinners'

const MovieDetail = ({ state }) => {
  const {id} = useParams();
  const { genreList, loading } = useSelector((state) => state.movie);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(movieAction.getMovies());
  // }, []);
  const location = useLocation()
  const movieItem = useLocation().state
  console.log('key',movieItem.key)
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/original"
  if (loading) {
    return (
      <div className="loader">
        <ClipLoader color="#f00" loading={loading} size={150} />;
      </div>
    );
  }
    return (
      <div 
        className='MovieDetail'
        style={{
          backgroundImage: `linear-gradient(to right, black, transparent), url(${BACKDROP_PATH}${movieItem.backdrop_path})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'right top'
      }}
      >
        <div className='info-area'>
          <h1 className='title'>{movieItem.title}</h1>
          <div className='movie-info'>
            <h3>평점: <span>{movieItem.vote_average}</span></h3>
            <h3>{movieItem.release_date}</h3>
            <h3>{movieItem.revenue}</h3>
            <h3>{movieItem.runtime}</h3>
            <h3>{movieItem.status}</h3>
          </div>
          {movieItem.genre_ids.map((id) => (
            <Badge bg="danger" className='badge'>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
          <div className='overview'>{movieItem.overview}</div>
          <div className='info-btns'>
            <button id='icon-play'><BsPlayFill style={{transform: 'translateY(-1px)', marginRight: '5px', fontSize: '25px'}} />재생</button>
            <button id='icon-plus'><BsPlus style={{transform: 'translateY(-1px)', marginRight: '5px', fontSize: '25px', fontWeight:'bold'}} />내가 찜한 콘텐츠</button>
            <button id='icon-thumbUp'><BsHandThumbsUp style={{transform: 'translateY(-4px)'}} /></button>
            <button id='icon-thumbDown'><BsHandThumbsDown style={{transform: 'translateY(-4px)'}} /></button>
          </div>
        </div>
        <YouTube
          className='youtube'
          videoId='XyHr-s3MfCQ'
          opts={{
            width: "1080",
            height: "520",
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
          onEnd={(e)=>{e.target.stopVideo(0);}}      
        />
      </div>
    );

};

export default MovieDetail;
