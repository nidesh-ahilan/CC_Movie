import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";


export default function Header({ setSearchMovie, showFavourites, showAllMovies })
{
  const handleSearchMovie = (event) => { setSearchMovie(event.target.value) };

  return (
    <>
      <header>
        <div>
          <img src={logo} alt="Logo" className="logo" onClick={showAllMovies} />
          <button className="header-button" onClick={showFavourites}>
            Favourite
          </button>
        </div>
        <div>
          <input type="text" placeholder="Search a movie" onChange={handleSearchMovie} />
        </div>
      </header>
    </>
  );
};


