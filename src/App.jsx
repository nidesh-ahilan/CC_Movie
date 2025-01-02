import { useState, useEffect } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";


export default function App() {
  const [searchMovie, setSearchMovie] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavourites, setShowFavourites] = useState(false);

  const saveToLocalStorage = (favourites) => {
    try 
    {
      localStorage.setItem("favourites", JSON.stringify(favourites));
    } 
    catch (error) 
    {
      console.error("Error", error);
    }
  };

  const toggleFavourite = (movie) => {
    const isFavourite = favorites.some((fav) => fav.imdbID === movie.imdbID);

    let updatedFavourites;

    if (isFavourite) 
    {
      updatedFavourites = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    } 
    else 
    {
      updatedFavourites = [...favorites, movie];
    }

    setFavorites(updatedFavourites);
    saveToLocalStorage(updatedFavourites);
  };

  const handleShowFavourites = () => setShowFavourites(true);
  const handleShowAllMovies = () => setShowFavourites(false);

  useEffect(() => {
    const data = localStorage.getItem("favourites");
    if (data) {
      setFavorites(JSON.parse(data));
    }
  }, []);

  return (
    <>
      <Header setSearchMovie={setSearchMovie} showFavourites={handleShowFavourites} showAllMovies={handleShowAllMovies} />
      <Movie searchTerm={searchMovie} toggleFavourite={toggleFavourite} favourites={favorites} showFavourites={showFavourites} />
    </>
  );
}