import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 7,
  },
  smallDesktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieSlide = ({ movies }) => {
  return (
    <div className='slider'>
      <Carousel responsive={responsive}>
        {movies.results.map((item) => (
            <MovieCard item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
