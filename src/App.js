import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Navigation from './Components/Navigation';
import Search from './Components/Search';

// 1. 3개 페이지 : 홈페이지, moview페이지, movieDetail페이지
// 2. 메인 홈페이지에서 배너를 볼 수 있다.
// 3. 메인 홈페이지에서 3가지 섹션의 영화를 볼 수 있다. (*popular, toprated, upcoming)
// 4. 각 영화를 슬라이드로 넘기면서 볼 수 있다.
// 5. 각 영화에 마우스 오버 시, 제목, 장르, 점수, 인기도, 청불여부

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
