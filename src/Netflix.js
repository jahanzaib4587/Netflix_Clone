import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Grid, Container } from "@material-ui/core";
import row from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@material-ui/icons/Search";
import "./netflix.css";
function Netflix() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchValue, setSearchValue] = useState("batman");
  const getMoviesRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d1116c60`;
    const response = await fetch(url);
    const resJson = await response.json();

    if (resJson.Search) {
      setMoviesData(resJson.Search);
    }
  };
  useEffect(() => {
    getMoviesRequest();
  }, [searchValue]);
  return (
    <Container>
      <div className="searchbar">
        <SearchIcon />
        <input
          className="d-flex w-100"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a movie... "
        ></input>
      </div>
      <div className="row">
        {moviesData.map((values, index) => (
          <MovieCard title={values.Title} srcImg={values.Poster}></MovieCard>
        ))}
      </div>
    </Container>
  );
}

export default Netflix;
// async function getMovies() {
//   const temp = await axios.get(
//     `http://www.omdbapi.com/?s=${searchValue}&apikey=d1116c60`
//   );
//   setMoviesData(temp.data);
//   console.log({ moviesData });
// }
// getMovies();
