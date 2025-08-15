import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function MovieCard({ movie }) {
    const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);

    const isFavorite = favorites.some((m) => m.imdbID === movie.imdbID);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie);
        }
    };

    const poster = movie.Poster && movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/200x300?text=No+Image";

    return (
        <div className="movie-card">
            <img src={poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <button
                className={`favorite-btn ${isFavorite ? "remove" : "add"}`}
                onClick={handleFavoriteClick}
            >
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
    );
}

export default MovieCard;
