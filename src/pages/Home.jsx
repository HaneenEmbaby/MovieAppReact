// src/pages/Home.jsx
import { useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

function Home() {
    const [query, setQuery] = useState("");      // search query
    const [movies, setMovies] = useState([]);    // list of movies
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");      // to show API errors

    const API_KEY = "211835ef";

    // Fetch movies when user clicks Search
    const handleSearch = async () => {
        if (!query) return; // do nothing on empty input
        setLoading(true);
        setError("");
        try {
            const res = await fetch(
                `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
            );
            const data = await res.json();
            if (data.Response === "False") {
                setMovies([]);
                setError(data.Error); // e.g., "Movie not found!"
            } else {
                setMovies(data.Search);
            }
        } catch (err) {
            setMovies([]);
            setError("Failed to fetch movies. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 20, maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
            <h1>Movie Search</h1>

            {/* SearchBar Component */}
            <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

            {/* Loading spinner */}
            {loading && <p>Loading...</p>}

            {/* Error message */}
            {!loading && error && <p>{error}</p>}

            {/* Movie list */}
            {!loading && movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}

export default Home;
