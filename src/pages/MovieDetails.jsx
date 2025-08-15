import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const API_KEY = "211835ef";

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(
                `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
            );
            const data = await res.json();
            setMovie(data);
        };
        fetchMovie();
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt={movie.Title} />
            <p>Year: {movie.Year}</p>
            <p>Rated: {movie.Rated}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Plot: {movie.Plot}</p>
            <p>IMDB Rating: {movie.imdbRating}</p>
        </div>
    );
}

export default MovieDetails;
