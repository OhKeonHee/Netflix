import React, { useEffect, useState } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MovieCard from './MovieCard';
import { BsSearch, BsBellFill } from "react-icons/bs";


const Navigation = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  const navigate = useNavigate();
  const goToSearch = () => {
    navigate(`/search`, {state: popularMovies, topRatedMovies, upComingMovies, loading})
  }
  return (
    <Navbar style={{position: 'fixed', zIndex:'999', width: '100%', backgroundColor: 'black', padding: '10px 20px'}}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            width={120}
            style={{marginRight: '15px'}}
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              홈
            </Link>
            <Link to="/" className="nav-item">
              TV 프로그램
            </Link>
            <Link to="/" className="nav-item">
              영화
            </Link>
            <Link to="/" className="nav-item">
              NEW
            </Link>
            <Link to="/" className="nav-item">
              요즘 대세 콘텐츠
            </Link>
            <Link to="/" className="nav-item">
              내가 찜한 콘텐츠
            </Link>
          </Nav>
          <button id='icon-search' onClick={goToSearch}><BsSearch /></button>
          <button id='icon-bell'><BsBellFill /></button>
          <img width={30} style={{borderRadius:'5px'}} src='https://i.pinimg.com/474x/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.jpg' />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
