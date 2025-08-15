import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
    return (
        <div
            className="movie-list"
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
            }}
        >
            {movies.map((movie) => (
                <Link
                    key={movie.imdbID}
                    to={`/movie/${movie.imdbID}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <MovieCard movie={movie} />
                </Link>
            ))}
        </div>
    );
}

export default MovieList;
