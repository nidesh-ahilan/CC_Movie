import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Movie.css";
import Favourite from "./Favourite";

export default function Movie({ searchTerm, toggleFavourite, favourites, showFavourites }) 
{
  const [movieData, setMovieData] = useState([]);
  const key = "ef489537";
  const baseURL = "http://www.omdbapi.com/";

  const fetchData = async () => {
    try 
    {
      const response = await axios.get(baseURL, { params: { s: searchTerm || "avengers", apikey: key,}});

      if (response.data.Response === "True") 
      {
        setMovieData(response.data.Search);
      } 
      else 
      {
        setMovieData([]);
      }
    } 
    catch (error) 
    {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const displayedMovies = showFavourites ? favourites : movieData;

  return (
    <>
      <div className="intro">
        <h1 className="welcome">Welcome to MovieGreen</h1>
        <h2 className="instruction">Please search for a movie</h2>
        <h2 className="instruction">Press the logo to come back to this page</h2>
      </div>
      <div className="movie-container">
        {displayedMovies.length > 0 ? ( displayedMovies.map((movie) => 
          (<Favourite key={movie.imdbID} movie={movie} toggleFavourite={toggleFavourite} favourites={favourites} />))) : (<p>No movies found</p>)}
      </div>
    </>
  );
}
