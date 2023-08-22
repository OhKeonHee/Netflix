import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import MovieCard from './MovieCard'
import { ClipLoader } from 'react-spinners';


const Search = ({ state }) => {
  const location = useLocation();
  const movieItem = location.state.results;
  const [search, setSearch] = useState("")
  const { loading } = useSelector((state) => state.movie);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }
  const getSearchResult = () => {
    return search === "" ? movieItem : 
    movieItem.title.filter((it) => 
      it.title.toLowerCase().includes(search.toLowerCase())
    )
  }
  if (loading) {
    return (
      <div className="loader">
        <ClipLoader color="#f00" loading={loading} size={150} />;
      </div>
    );
  }
  return (
    <div className='search'>
      <input type='text' value={search} onChange={onChangeSearch} />
      <div className='search-result'>
          {getSearchResult().map((item) => (
            <MovieCard item={item} {...item} />
          ))}
      </div>
    </div>
  )
}

export default Search
