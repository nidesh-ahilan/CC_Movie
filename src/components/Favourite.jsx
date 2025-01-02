import React from "react";
import "./Movie.css"

export default function Favourite ({ movie, toggleFavourite, favourites }) 
{
  return (
    <div className="movie-box" key={movie.imdbID}>

      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <h2>{movie.Title}</h2>
      <button className="favourite-button" onClick={() => toggleFavourite(movie)}>
        {favourites.some((fav) => fav.imdbID === movie.imdbID) ? "Remove from Favourite" : "Add to Favourite"}
      </button>
      
    </div>
  );
};

