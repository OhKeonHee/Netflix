import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../Components/Banner';
import MovieSlide from '../Components/MovieSlide';
import { useState, CSSProperties } from 'react';
import { ClipLoader } from 'react-spinners';

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  // loading이 true면 loading 스피너를 보여주고
  // loading이 false면 데이터를 보여준다
  // true: 데이터 도착 전
  // false: 데이터 도착 후

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader color="#f00" loading={loading} size={150} />;
      </div>
    );
  }
  return (
    <div className="slide" style={{padding: '20px'}}>
      <Banner movie={popularMovies.results[1]} movies={popularMovies} />
      <h3>영화 인기 컨텐츠</h3>
      <MovieSlide movies={popularMovies} />
      <h3>평점 TOP 20</h3>
      <MovieSlide movies={topRatedMovies} />
      <h3>개봉예정 영화</h3>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default Home;
